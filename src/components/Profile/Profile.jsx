import PropTypes from "prop-types"

import "./Profile.css";


// компонент профіля
export default function Profile(props) {
  // des props 
const {username, 
  tag,
  location,
  avatar,
  stats: {followers, views, likes} }  = props;
  
  console.log(props)
  return (
    <div className="profile" >
        <div className="description">
          <img
            src={avatar}
            alt="User avatar"
            className="avatar"
                     />
        </div>
                     <div class="descr"> 
          <p className="name" >{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
          </div>

      
        <ul className="stats">
          <li>
            <span className="label">followers</span>
            <span className="quantity" >{followers}</span>
          </li>
          <li>
            <span className="label">views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    );
  }
  // прототайпи
  Profile.propTypes =  {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats:  PropTypes.object,
  }




// 
// 
// 
// 
// 
// 
// className="quantity"
// className="label"
// 
// className="label"
// className="quantity"

  //  console.log("fdfd");