import PropTypes from 'prop-types';
import FriendItem from './FriendItem/FriendItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={s.list}>
        {friends.map(friend => (
          <FriendItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
            key={friend.id}
          />
        ))}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
