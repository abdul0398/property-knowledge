import { db } from "@/lib/db"
import { auth } from "@/lib/auth"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRoleToggle } from "@/components/features/user-role-toggle"
import { AdminDeleteButton } from "@/components/features/admin-delete-button"
import { deleteUser } from "@/app/actions/admin"
import { CreateUserForm } from "@/components/features/create-user-form"

export const metadata = {
  title: "Manage Users — PropertyKnowledge",
}

export default async function AdminUsersPage() {
  const session = await auth()
  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Users</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>All Users ({users.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell className="text-sm">{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.role === "ADMIN" ? "default" : "secondary"
                          }
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {user.createdAt.toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <UserRoleToggle
                            userId={user.id}
                            currentRole={user.role}
                            isSelf={user.id === session?.user?.id}
                          />
                          {user.id !== session?.user?.id && (
                            <AdminDeleteButton
                              id={user.id}
                              action={deleteUser}
                              confirmMessage={`Delete user "${user.name}"?`}
                            />
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <CreateUserForm />
      </div>
    </div>
  )
}
