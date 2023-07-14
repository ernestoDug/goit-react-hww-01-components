// компонент статистики
const FriendList = props => {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} />
      ))}
    </ul>
  );
};

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src = {avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendList;
