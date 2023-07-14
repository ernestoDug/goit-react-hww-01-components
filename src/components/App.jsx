// import ReactDOM from 'react-dom/client';
import React from 'react';



// кОмпО
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';

// джейСини
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';




// npm install prop-types






export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >,
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
 
<FriendList friends={friends} />
    </div>
  )
    }

