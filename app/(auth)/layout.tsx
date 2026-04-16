export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-accent/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.72_0.12_55_/_0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.35_0.035_260_/_0.04),transparent_60%)]" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
