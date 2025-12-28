interface StatisticCardProps {
  label: string;
  value: number;
}

export function StatisticCard({ label, value }: StatisticCardProps) {
  return (
    <div className="flex flex-col items-start gap-2 sm:gap-4 p-4 bg-neutral-100 rounded-2xl">
      <p className="text-md sm:text-lg font-medium text-neutral-950">{label}</p>
      <p className="text-3xl sm:text-4xl font-semibold text-neutral-950">
        {value.toLocaleString('en-US')}
      </p>
    </div>
  );
}
