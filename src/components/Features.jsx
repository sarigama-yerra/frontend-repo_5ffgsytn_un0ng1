import { PieChart, CreditCard, TrendingUp, Shield } from "lucide-react";

const items = [
  {
    icon: PieChart,
    title: "Smart Budgets",
    desc: "Create flexible budgets with instant insights into where your money goes.",
  },
  {
    icon: CreditCard,
    title: "Expense Tracking",
    desc: "Log transactions fast and categorize spending with ease.",
  },
  {
    icon: TrendingUp,
    title: "Cash Flow Charts",
    desc: "Visualize income vs expenses to spot trends and plan ahead.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    desc: "Your data stays private with secure, modern best practices.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need to master your money
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A focused toolkit that makes personal finance simple and stress-free.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 inline-flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
