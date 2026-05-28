type MetricCardProps = {
  value: string;
  label: string;
  tone?: "light" | "dark";
};

export function MetricCard({ value, label, tone = "light" }: MetricCardProps) {
  return (
    <div className={`metric-card metric-card--${tone}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
