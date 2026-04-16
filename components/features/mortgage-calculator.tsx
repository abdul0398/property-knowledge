"use client"

import { useState } from "react"
import { calculateMortgage } from "@/lib/calculators"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"

export function MortgageCalculator() {
  const [price, setPrice] = useState("")
  const [downPayment, setDownPayment] = useState("25")
  const [rate, setRate] = useState("3.5")
  const [tenure, setTenure] = useState("25")
  const [result, setResult] = useState<ReturnType<
    typeof calculateMortgage
  > | null>(null)

  function handleCalculate() {
    const p = parseFloat(price)
    const dp = parseFloat(downPayment)
    const r = parseFloat(rate)
    const t = parseInt(tenure)

    if (isNaN(p) || isNaN(dp) || isNaN(r) || isNaN(t)) return

    const principal = p * (1 - dp / 100)
    setResult(calculateMortgage(principal, r, t))
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
              Down Payment (%)
            </Label>
            <Input
              type="number"
              placeholder="25"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="h-11 bg-surface border-border/60"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Annual Interest Rate (%)
            </Label>
            <Input
              type="number"
              step="0.1"
              placeholder="3.5"
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
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="text-center p-5 rounded-xl bg-warm/8 border border-warm/15">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Monthly Payment
                </p>
                <p className="font-heading text-2xl font-bold text-warm">
                  {fmt(result.monthlyPayment)}
                </p>
              </div>
              <div className="text-center p-5 rounded-xl bg-muted/50 border border-border/50">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Total Interest
                </p>
                <p className="font-heading text-2xl font-bold">
                  {fmt(result.totalInterest)}
                </p>
              </div>
              <div className="text-center p-5 rounded-xl bg-muted/50 border border-border/50">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Total Payment
                </p>
                <p className="font-heading text-2xl font-bold">
                  {fmt(result.totalPayment)}
                </p>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
