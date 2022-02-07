export default function StatisticItem(props) {
  const { label, percentage } = props;
  return (
    <>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </>
  );
}
