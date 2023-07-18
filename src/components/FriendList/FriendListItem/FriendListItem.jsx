import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.itemFr}>
      {/* рендер за умовою  з додаванням класів*/}
      <span className={isOnline ? css.statusOn : css.statusOff}>
        {isOnline}-
      </span>

      <img className={css.avatar} src={avatar} alt="User avatar" width="180" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

// прототайпи
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
