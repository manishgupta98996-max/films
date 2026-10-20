interface KeyTakeawaysProps {
  takeaways?: string[];
}

export default function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) {
    return null;
  }

  return (
    <div className="my-8 rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-6 sm:p-7 shadow-sm">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-7 h-7 rounded-lg bg-amber-500 text-zinc-950 font-black flex items-center justify-center text-xs shadow-sm">
          ★
        </span>
        <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 tracking-tight">
          Key Production Takeaways
        </h3>
      </div>
      <ul className="space-y-3">
        {takeaways.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-800 leading-relaxed font-medium">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-900 text-xs font-bold mt-0.5 shrink-0">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
