"use client"

import { useState } from "react"
import {
  calculateBSD,
  calculateABSD,
  type BuyerProfile,
} from "@/lib/calculators"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowRight } from "lucide-react"

const buyerProfiles: { value: BuyerProfile; label: string }[] = [
  { value: "sc_first", label: "Singapore Citizen — 1st Property" },
  { value: "sc_second", label: "Singapore Citizen — 2nd Property" },
  { value: "sc_third", label: "Singapore Citizen — 3rd+ Property" },
  { value: "pr_first", label: "Permanent Resident — 1st Property" },
  { value: "pr_second", label: "Permanent Resident — 2nd+ Property" },
  { value: "foreigner", label: "Foreigner" },
]

export function StampDutyCalculator() {
  const [price, setPrice] = useState("")
  const [profile, setProfile] = useState<BuyerProfile>("sc_first")
  const [result, setResult] = useState<{
    bsd: ReturnType<typeof calculateBSD>
    absd: number
  } | null>(null)

  function handleCalculate() {
    const p = parseFloat(price)
    if (isNaN(p)) return

    setResult({
      bsd: calculateBSD(p),
      absd: calculateABSD(p, profile),
    })
  }

  const fmt = (n: number) =>
    n.toLocaleString("en-SG", {
      style: "currency",
      currency: "SGD",
      maximumFractionDigits: 0,
    })

  return (
    <Card className="border-border/50 shadow-sm">
      <CardContent className="p-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Property Price ($)
            </Label>
            <Input
              type="number"
              placeholder="1,000,000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="h-11 bg-surface border-border/60"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Buyer Profile
            </Label>
            <Select
              value={profile}
              onValueChange={(v) => setProfile(v as BuyerProfile)}
            >
              <SelectTrigger className="h-11 bg-surface border-border/60">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {buyerProfiles.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={handleCalculate}
          className="warm-gradient text-white font-semibold border-0 hover:opacity-90 transition-opacity gap-2"
        >
          Calculate
          <ArrowRight className="h-4 w-4" />
        </Button>

        {result && (
          <>
            <Separator />

            <div>
              <h3 className="font-heading font-semibold text-sm mb-3">
                Buyer&apos;s Stamp Duty (BSD) Breakdown
              </h3>
              <div className="rounded-lg border border-border/50 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                      <TableHead className="text-xs font-semibold">Range</TableHead>
                      <TableHead className="text-xs font-semibold">Rate</TableHead>
                      <TableHead className="text-right text-xs font-semibold">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {result.bsd.breakdown.map((row, i) => (
                      <TableRow key={i} className="border-border/30">
                        <TableCell className="text-sm text-muted-foreground">{row.range}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.rate}%</TableCell>
                        <TableCell className="text-right text-sm font-medium">
                          {fmt(row.amount)}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="font-semibold bg-muted/30 border-border/30">
                      <TableCell colSpan={2} className="text-sm">Total BSD</TableCell>
                      <TableCell className="text-right text-sm">
                        {fmt(result.bsd.bsd)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="text-center p-5 rounded-xl bg-muted/50 border border-border/50">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  BSD
                </p>
                <p className="font-heading text-xl font-bold">
                  {fmt(result.bsd.bsd)}
                </p>
              </div>
              <div className="text-center p-5 rounded-xl bg-muted/50 border border-border/50">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  ABSD
                </p>
                <p className="font-heading text-xl font-bold">
                  {fmt(result.absd)}
                </p>
              </div>
              <div className="text-center p-5 rounded-xl bg-warm/8 border border-warm/15">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Total Stamp Duty
                </p>
                <p className="font-heading text-2xl font-bold text-warm">
                  {fmt(result.bsd.bsd + result.absd)}
                </p>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
