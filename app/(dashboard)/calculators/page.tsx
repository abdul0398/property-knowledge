import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MortgageCalculator } from "@/components/features/mortgage-calculator"
import { StampDutyCalculator } from "@/components/features/stamp-duty-calculator"
import { AffordabilityCalculator } from "@/components/features/affordability-calculator"
import { Calculator, Receipt, Wallet } from "lucide-react"

export const metadata = {
  title: "Calculators — PropertyKnowledge",
}

export default function CalculatorsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="animate-fade-in-up">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-warm mb-1.5">
          Financial Tools
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Property Calculators
        </h1>
        <p className="text-muted-foreground mt-1.5 text-sm">
          Instant financial calculations for property transactions
        </p>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <Tabs defaultValue="mortgage" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3 h-11 bg-muted/50 p-1">
            <TabsTrigger value="mortgage" className="text-xs font-semibold gap-1.5">
              <Calculator className="h-3.5 w-3.5" />
              Mortgage
            </TabsTrigger>
            <TabsTrigger value="stamp-duty" className="text-xs font-semibold gap-1.5">
              <Receipt className="h-3.5 w-3.5" />
              Stamp Duty
            </TabsTrigger>
            <TabsTrigger value="affordability" className="text-xs font-semibold gap-1.5">
              <Wallet className="h-3.5 w-3.5" />
              Affordability
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mortgage">
            <MortgageCalculator />
          </TabsContent>

          <TabsContent value="stamp-duty">
            <StampDutyCalculator />
          </TabsContent>

          <TabsContent value="affordability">
            <AffordabilityCalculator />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
