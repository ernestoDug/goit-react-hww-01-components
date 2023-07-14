import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// кОмпО
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';

// джейСини
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />,
    <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />,
 <Statistics 
 title="Upload stats" 
 stats={data} />,
 
<FriendList friends={friends} />;

  </React.StrictMode>
);
// console.log('fdfdsdsewe');

