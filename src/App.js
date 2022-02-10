import Profile from './components/Profile/Profile';
import StatisticList from './components/StatisticList/StatisticList';
import FriendList from './components/FriendList/FriendList';
import TransactionList from './components/TransactionList/TransactionList';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

function App() {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <StatisticList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </div>
  );
}

export default App;
