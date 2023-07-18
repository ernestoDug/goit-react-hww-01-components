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
      {friends.map(({ isOnline, avatar, name, id }) => {
        return (
          <FriendListItem
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            key={id}
          />
        );
      })}
    </ul>
  );
};

// прототайпи
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
