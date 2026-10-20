import React from "react";

interface ComparisonTableProps {
  children: React.ReactNode;
}

export default function ComparisonTable({ children }: ComparisonTableProps) {
  return (
    <div className="my-8 rounded-2xl border border-light-muted/20 bg-light-surface shadow-sm overflow-hidden">
      <div className="overflow-x-auto p-4 sm:p-6 text-sm">
        <div className="min-w-[600px]">{children}</div>
      </div>
    </div>
  );
}
