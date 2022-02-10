import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem/StatisticItem';
import s from './StatisticList.module.css';
import randomColor from '../../randomColor/randomColor';

export default function StatisticList({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <StatisticItem key={id} label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
