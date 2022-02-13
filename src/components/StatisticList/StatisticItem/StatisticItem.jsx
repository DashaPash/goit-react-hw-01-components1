import PropTypes from 'prop-types';
import s from './StatisticItem.module.css';
import randomColor from '../../../randomColor/randomColor';

export default function StatisticItem(props) {
  const { label, percentage, id } = props;
  return (
    <li className={s.item} key={id} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
