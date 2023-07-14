import PropTypes from "prop-types"

import FriendListItem from "./FriendListItem";


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

