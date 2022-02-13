import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

export default function FriendItem({ id, avatar, name, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span className={`${s.status} ${isOnline ? s.online : s.offline}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
