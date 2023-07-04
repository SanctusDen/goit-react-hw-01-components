import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
// import transactions from '../Transactions/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
// import Transactions from './Transactions';

export function App() {
  return (
    <div>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>

      <div>
        <FriendList friends={friends} />;
      </div>

      {/* <div>
        <TransactionHistory items={transactions} />;
      </div> */}
      
    </div>
  );
};