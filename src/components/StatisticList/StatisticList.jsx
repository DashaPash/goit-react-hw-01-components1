import StatisticItem from './StatisticItem/StatisticItem';

export default function StatisticList({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li class="item" key={id}>
            <StatisticItem key={id} label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}
