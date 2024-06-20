import React from "react";
import Leftsidebar from "../Leftsidebar";
import proimg from '../../../Assets/Images/dummy_profile.png';
// import proimg from '../../Assets/Images/dummy_profile.png';

export default function Home() {
    return(
        <div className="bh_home_wrapper-in">
            <div className="bh_title_wrap">
                <h2>Dashboard</h2>
                <div className="bh_profile_wrap">
                    <div className="bh_profile_img">
                        <img src={proimg} alt="profile-img"/>
                    </div>
                    <div className="bh_pro_name">
                        <h4>Booking hub Admin</h4>
                    </div>  
                    <div className="bh_downarrow"> 
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L13 1" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                    </div>
            </div>

            
       </div>
    )
}