"use client"

import { useState } from "react"
import { calculateAffordability } from "@/lib/calculators"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"

export function AffordabilityCalculator() {
  const [income, setIncome] = useState("")
  const [obligations, setObligations] = useState("0")
  const [rate, setRate] = useState("4.0")
  const [tenure, setTenure] = useState("25")
  const [isHDB, setIsHDB] = useState(false)
  const [result, setResult] = useState<ReturnType<
    typeof calculateAffordability
  > | null>(null)

  function handleCalculate() {
    const i = parseFloat(income)
    const o = parseFloat(obligations)
    const r = parseFloat(rate)
    const t = parseInt(tenure)

    if (isNaN(i) || isNaN(o) || isNaN(r) || isNaN(t)) return

    setResult(calculateAffordability(i, o, r, t, isHDB))
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
              Gross Monthly Income ($)
            </Label>
            <Input
              type="number"
              placeholder="10,000"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="h-11 bg-surface border-border/60"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Existing Monthly Obligations ($)
            </Label>
            <Input
              type="number"
              placeholder="0"
              value={obligations}
              onChange={(e) => setObligations(e.target.value)}
              className="h-11 bg-surface border-border/60"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Stress Test Rate (%)
            </Label>
            <Input
              type="number"
              step="0.1"
              placeholder="4.0"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="h-11 bg-surface border-border/60"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Loan Tenure (years)
            </Label>
            <Input
              type="number"
              placeholder="25"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="h-11 bg-surface border-border/60"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/40">
          <Switch checked={isHDB} onCheckedChange={setIsHDB} />
          <div>
            <Label className="text-sm font-medium">HDB / EC Purchase</Label>
            <p className="text-xs text-muted-foreground">MSR (30%) limit applies</p>
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
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-5 rounded-xl bg-warm/8 border border-warm/15">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Maximum Loan
                </p>
                <p className="font-heading text-2xl font-bold text-warm">
                  {fmt(result.maxLoan)}
                </p>
              </div>
              <div className="text-center p-5 rounded-xl bg-muted/50 border border-border/50">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Recommended Price
                </p>
                <p className="font-heading text-2xl font-bold">
                  {fmt(result.recommendedPrice)}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Based on 75% LTV</p>
              </div>
              <div className="text-center p-5 rounded-xl bg-muted/50 border border-border/50">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Max Monthly Payment
                </p>
                <p className="font-heading text-2xl font-bold">
                  {fmt(result.monthlyPayment)}
                </p>
              </div>
            </div>

            <div className="text-sm space-y-1.5 text-muted-foreground p-4 rounded-lg bg-muted/30 border border-border/30">
              <p>
                <strong className="text-foreground">TDSR Limit (55%):</strong> Max loan{" "}
                {fmt(result.maxLoanTDSR)}
              </p>
              {isHDB && (
                <p>
                  <strong className="text-foreground">MSR Limit (30%):</strong> Max loan{" "}
                  {fmt(result.maxLoanMSR)}
                </p>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
