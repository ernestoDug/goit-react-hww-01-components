import PropTypes from "prop-types"

import FriendListItem from "./FriendListItem/FriendListItem";

import  css from "./FriendList.module.css";

// компонент друзі
const FriendList = (props) => {
  const {friends} = props;
        return (
    <ul className={css.friendList}>
          <FriendListItem friends = {friends}  />
  </ul>
    
  );
  
};

  // прототайпи
  FriendList.propTypes =  {
    friends:  PropTypes.array,
  }

    




export default FriendList;

