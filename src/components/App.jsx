// import ReactDOM from 'react-dom/client';
import React from 'react';



import  Profile from 'components/Profile/Profile';
import user from 'user.json'

// уноЗвертання дом
// const root = document.getElementById("root");

<Profile
         username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
      />

// root.render("Profile");






// npm install prop-types



















export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    </div>
  );
};
