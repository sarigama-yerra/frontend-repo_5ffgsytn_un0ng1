import { useMemo, useState } from "react";

function formatCurrency(n) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(n || 0);
}

export default function Tracker() {
  const [entries, setEntries] = useState([
    { id: 1, type: "income", label: "Salary", amount: 3200 },
    { id: 2, type: "expense", label: "Rent", amount: 1200 },
    { id: 3, type: "expense", label: "Groceries", amount: 260 },
  ]);
  const [form, setForm] = useState({ type: "expense", label: "", amount: "" });

  const totals = useMemo(() => {
    const income = entries.filter(e => e.type === "income").reduce((s, e) => s + e.amount, 0);
    const expense = entries.filter(e => e.type === "expense").reduce((s, e) => s + e.amount, 0);
    return { income, expense, balance: income - expense };
  }, [entries]);

  function addEntry(e) {
    e.preventDefault();
    const amount = parseFloat(form.amount);
    if (!form.label || isNaN(amount)) return;
    setEntries(prev => [
      { id: Date.now(), type: form.type, label: form.label, amount: Math.max(0, amount) },
      ...prev,
    ]);
    setForm({ type: form.type, label: "", amount: "" });
  }

  function removeEntry(id) {
    setEntries(prev => prev.filter(e => e.id !== id));
  }

  return (
    <section id="tracker" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Add</h3>
              <form onSubmit={addEntry} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <select
                    className="col-span-2 sm:col-span-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                    value={form.type}
                    onChange={(e) => setForm(f => ({ ...f, type: e.target.value }))}
                  >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Label (e.g. Coffee)"
                    className="col-span-2 sm:col-span-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                    value={form.label}
                    onChange={(e) => setForm(f => ({ ...f, label: e.target.value }))}
                  />
                </div>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Amount"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                  value={form.amount}
                  onChange={(e) => setForm(f => ({ ...f, amount: e.target.value }))}
                />
                <button type="submit" className="w-full rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800 transition">
                  Add Entry
                </button>
              </form>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Summary</h3>
              <dl className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500">Income</dt>
                  <dd className="font-semibold text-emerald-600">{formatCurrency(totals.income)}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Expenses</dt>
                  <dd className="font-semibold text-rose-600">{formatCurrency(totals.expense)}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Balance</dt>
                  <dd className={`font-semibold ${totals.balance >= 0 ? 'text-slate-900' : 'text-rose-600'}`}>{formatCurrency(totals.balance)}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Transactions</h3>
              <div className="flow-root">
                <ul role="list" className="-my-5 divide-y divide-slate-100">
                  {entries.map((e) => (
                    <li key={e.id} className="py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${e.type === 'income' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{e.label}</p>
                          <p className="text-xs text-slate-500 capitalize">{e.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-semibold ${e.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>{e.type === 'income' ? '+' : '-'}{formatCurrency(e.amount)}</span>
                        <button onClick={() => removeEntry(e.id)} className="text-xs text-slate-500 hover:text-rose-600">Remove</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
