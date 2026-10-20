import React from "react";

interface CalloutProps {
  type?: "tip" | "warning" | "note";
  children: React.ReactNode;
}

export default function Callout({ type = "note", children }: CalloutProps) {
  const styles = {
    tip: {
      border: "border-emerald-500/40",
      bg: "bg-emerald-500/5",
      text: "text-emerald-900",
      label: "PRO TIP",
      icon: "💡",
    },
    warning: {
      border: "border-amber-500/40",
      bg: "bg-amber-500/10",
      text: "text-amber-900",
      label: "WATCH OUT",
      icon: "⚠️",
    },
    note: {
      border: "border-blue-500/40",
      bg: "bg-blue-500/5",
      text: "text-blue-950",
      label: "NOTE",
      icon: "ℹ️",
    },
  }[type];

  return (
    <aside className={`my-6 rounded-2xl border-2 ${styles.border} ${styles.bg} p-5 sm:p-6 text-sm sm:text-base leading-relaxed ${styles.text}`} role="note">
      <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-2">
        <span aria-hidden="true">{styles.icon}</span>
        <span>{styles.label}</span>
      </div>
      <div>{children}</div>
    </aside>
  );
}
