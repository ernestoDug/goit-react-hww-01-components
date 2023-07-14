import PropTypes from "prop-types"

//  const FriendListItem = ({friends}) => {
//     const { avatar, 
//       name, 
//       isOnline } = friends;
//           console.log(friends, "55555555555555")

//        friends.map(friend => 
//         <li  key={friend.id} 
//         className="item"
//         >
//         <span   className="status">{isOnline}</span>
//         <img 
//         className="avatar" src = {avatar} alt="User avatar" width="48" />
//         <p className="name">{name}</p>
//       </li>)
//        return <>{FriendListItem}</>
//     }
const FriendListItem = (props) => {
    const { friends: [{avatar, name, isOnline}] } = props;
    console.log(props.friends,"111111111111111")
    return (
      props.friends.map(friend => (
        <li key={friend.id}
        className="item">
<span className="status">{isOnline}</span>
<img className="avatar" src={avatar} alt="User avatar" width="48" />
<p className="name">{name}</p>
</li>)))
}


          // <li className="item">
          //   <span className="status">{isOnline}</span>
          //   <img className="avatar" src = {avatar} alt="User avatar" width="48" />
          //   <p className="name">{name}</p>
          // </li>
  // прототайпи
  FriendListItem.propTypes =  {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  
  }




    export default FriendListItem
      

    


// *******************************
