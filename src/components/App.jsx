import Userdata from './Profile/user.json';
import Statdata from './Statistics/data.json';
import Frienddata from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
// console.log(Userdata.tag);
export const App = () => {
  return (
    <div>
      {/* user profile */}
      <Profile
        username={Userdata.username}
        tag={Userdata.tag}
        location={Userdata.location}
        avatar={Userdata.avatar}
        stats={Userdata.stats}
      />
      {/* STATISTICS */}
      <Statistics title="Upload stats" stats={Statdata} />
      {/* <Statistics stats={Statdata} /> */}
      {/* FRIEND_LIST */}

      <FriendList friends={Frienddata} />

      {/* TRANSACTION */}
      <TransactionHistory items={transactions} />
    </div>
  );
};
