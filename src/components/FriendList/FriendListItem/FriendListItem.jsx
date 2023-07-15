import PropTypes from "prop-types"
import css from  "./FriendListItem.module.css";

const FriendListItem = (props) => {
    const { friends } = props;
    // console.log(props.friends[2],"111111111111111")
    return  (friends.map(friend => (
        <li key={friend.id}
        className={css.itemFr}
              >
<span className={css.status}>{friend.isOnline}d</span>
<img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
<p 
className={css.name}
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
