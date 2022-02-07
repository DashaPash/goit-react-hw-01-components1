import FriendItem from './FriendItem/FriendItem';

export default function FriendList({ friends }) {
  return (
    <>
      <ul class="friend-list">
        {friends.map(friend => (
          <li class="item" key={friend.id}>
            <FriendItem
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
