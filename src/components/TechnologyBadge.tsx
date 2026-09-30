export function TechnologyBadge({ label }: { label: string }) {
  return (
    <span className="rounded-sm border border-line px-2 py-0.5 font-mono text-xs text-muted">
      {label}
    </span>
  )
}
