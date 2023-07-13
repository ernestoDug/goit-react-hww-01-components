import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';

import user from 'user.json';
import data from 'data.json';

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
 stats={data} />
{/* <Statistics stats={data} /> */}

  </React.StrictMode>
);
// console.log('fdfdsdsewe');

