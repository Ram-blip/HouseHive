import { useState } from 'react';
import './userButton.css'
import Image from '../image/image';
import apiRequest from '../../../utils/apiRequest';
import { Link, useNavigate } from 'react-router';
import useAuthStore from '../../../utils/authStore.js';

const UserButton = () => {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  // temp user
  // const currentUser = true; 
  const {currentUser, removeCurrentUser} = useAuthStore();
  console.log(currentUser);

  const handleLogout = async () => {
    try{  
      await apiRequest.post('/users/auth/logout',{});
      removeCurrentUser();
      navigate('/auth');
    }catch(err){
      console.error("Logout failed:", err);
      // Optionally handle error, e.g., show a notification
    }
  }

  return currentUser ? (
    <div className="userButton">
      <Image path={currentUser.img || 'general/noAvatar.png'} alt=" " />
      <div onClick={() => setOpen((prev) => !prev)}>
        <Image 
            path={currentUser.img || 'general/arrow.svg'}
            alt='arrow' 
            className='arrow' 
        />
      </div>
      {open && <div className="userOptions">
        <Link to={`/profile/${currentUser.username}`} className="userOption">Profile</Link>
        <div className="userOption">Settings</div>
        <div className="userOption" onClick={handleLogout}>Logout</div>
      </div>}
    </div>
  ) : (<Link to='/auth' className='LoginLink'>Login / Sign up</Link>)
}

export default UserButton;