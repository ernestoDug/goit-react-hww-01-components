import PropTypes from 'prop-types';
// npm i prop-types

// import exact from 'prop-types-exact';
// // npm i prop-types-exact

import FriendListItem from './FriendListItem/FriendListItem';

import css from './FriendList.module.css';

// компонент друзі
const FriendList = props => {
  const { friends } = props;
  return (
    <ul className={css.friendList}>
      <FriendListItem friends={friends} 
      
      
      />
    </ul>
  );
};

// прототайпи
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;
