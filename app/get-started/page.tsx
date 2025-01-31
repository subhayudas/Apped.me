import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Basic Plan",
    price: "$19",
    description: "Ideal for indie developers",
    features: [
      "20 users testing for 14 days",
      "Detailed feedback and compliance report",
      "Email support",
      "Launch checklist",
      "1 round of revisions",
    ],
  },
  {
    name: "Pro Plan",
    price: "$49",
    description: "Best for small teams and startups",
    features: [
      "All Basic Plan features",
      "Demographic targeting",
      "Advanced user feedback with video recording",
      "25 users testing for 14 days",
      "3 rounds of revisions",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    description: "Designed for enterprises with specific needs",
    features: [
      "All Pro Plan features",
      "Custom testing scenarios",
      "Priority support with quicker turnaround times",
      "Unlimited users and testing duration",
      "Dedicated account manager",
      "Custom launch strategy",
      "Post-launch monitoring",
    ],
  },
];

export default function GetStarted() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your Launch Plan
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Select the perfect plan for your app launch needs. All plans include our
            core testing and compliance services.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="flex flex-col p-8 hover:shadow-lg transition-shadow"
            >
              <div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/app</span>
                  )}
                </div>
                <p className="mt-4 text-muted-foreground">{plan.description}</p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-none text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-xl font-bold">Need More Information?</h3>
          <p className="mt-4 text-muted-foreground">
            Contact us to discuss your specific requirements or schedule a consultation.
          </p>
          <Button className="mt-8" variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}