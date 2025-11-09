export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} FlowLedger. All rights reserved.</p>
        <div className="text-xs text-slate-500">
          Built with care for better money habits.
        </div>
      </div>
    </footer>
  );
}
