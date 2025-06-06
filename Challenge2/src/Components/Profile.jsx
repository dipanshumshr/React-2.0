import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/Tab/TabInfo';

const Profile = () => {
  const dispatch = useDispatch();

  const profileData = useSelector(state => state.entry.profile)

  const [data, setData] = useState({
    username : profileData.username,
    showEmail :profileData.showEmail
  })

  function handleChange(e, key)
  {
    setData(prev => { return{
      ...prev,
      [key] : e.target.value,
    }})

    dispatch(updateProfile(data))
  }

  function handleCheck(e , key )
  {
    
  }


  return (
    <div>
      <h2>Profile</h2>
      <input type="text" placeholder="Username" value = {profileData.username} onChange={()=> handleChange(e , "username")}/>
      <br />
      <label> 
        Show Email:
        <input type="checkbox" checked = {profileData.showEmail} onChange={()=> handleCheck(e , "showEmail")} />
      </label>
    </div>
  );
};

export default Profile;
