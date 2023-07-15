import PropTypes from "prop-types"

// import clsx from "clsx";



import css from  "./FriendListItem.module.css";

const FriendListItem = (props) => {
    const { friends } = props;
    // console.log(props.friends[2],"111111111111111")
    return  (friends.map(friend => (
        <li key={friend.id}
        className={css.itemFr}
              >
                {/* <Alert isOnline ={friends.isOnline}/> */}
<span className={css.status}>{friend.isOnline}-</span>
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



    //  const Alert = ({ isOnline}) => {
    //   return (
    //     <span
    //     className={clsx(
    //       css.status,
    //       {isOnline},
    //        false && css.statusOff,
    //       true && css.statusOn
    //     )}
    //     >
     
    //     </span>
    //   );
    // };
    
    
// const Alert = ({isOnline} ) => {
//   const classNames = [css.status, isOnline];
//   if (isOnline === true) classNames.push(css.statusOn);
//   if (isOnline !== true) classNames.push(css.statusOff);
//   console.log(isOnline)
//   return <span className={classNames.join(" ")}></span>;
// };


    

    export default FriendListItem
      

    


