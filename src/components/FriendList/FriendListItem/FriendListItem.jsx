import PropTypes from "prop-types"
import "./FriendListItem.css"

const FriendListItem = (props) => {
    const { friends } = props;
    console.log(props.friends[2],"111111111111111")
    return  (friends.map(friend => (
        <li key={friend.id}
        className="itemFr"
              >
<span className="status">{friend.isOnline}</span>
<img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
<p 
className="name"
>{friend.name}</p>
</li>)))}

     
  // прототайпи
  FriendListItem.propTypes =  {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    }



    export default FriendListItem
      

    


// *******************************
