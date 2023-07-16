import PropTypes from "prop-types"


import css from  "./FriendListItem.module.css";

const FriendListItem = (props) => {
    const { friends } = props;
    return  (friends.map(friend => (
        <li key={friend.id}
        className={css.itemFr}
              >
    <span className={friend.isOnline ? css.statusOn : css.statusOff}>{friend.isOnline}-</span>

<img className={css.avatar} src={friend.avatar} alt="User avatar" width="180" />
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
      

    


