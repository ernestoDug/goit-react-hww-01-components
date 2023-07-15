import PropTypes from "prop-types"

import FriendListItem from "./FriendListItem/FriendListItem";

import "./FriendList.css";


// компонент друзі
const FriendList = (props) => {
  const {friends} = props;
        return (
    <ul className="friend-list">
          <FriendListItem friends = {friends}  />
  </ul>
    
  );
  
};

  // прототайпи
  FriendList.propTypes =  {
    friends:  PropTypes.array,
  }

    




export default FriendList;

