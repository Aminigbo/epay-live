import React from "react";
import { supabase } from '../../configurations/index';
const Profile = ({state}) => {
  return (
    <div className="admin-pro">
      <form className="admin-form">
        <input type="text" disabled placeholder="User Name" className="admin-input" value={state.loggedInUser.fullName} />
        <input type="text" disabled placeholder="Email" className="admin-input" value={state.loggedInUser.email} />
        <input
          type="text"
          placeholder="Phone number"
          className="admin-input" disabled value={state.loggedInUser.fullName}
        />
        {/* <input
          type="password"
          placeholder="Confirm Password"
          className="admin-input" disabled
        /> */}
        {/* <button className="admin-update-btn">Update Profile</button> */}
      </form>
    </div>
  );
};

export default Profile;
