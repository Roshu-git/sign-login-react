import React from 'react';
import { Link } from 'react-router-dom';
import logleftimg from '../../Assets/Images/login/logimg.png';
import logo from '../../Assets/Images/Logo.png';
import leftimg1 from '../../Assets/Images/login/Event.png';
import leftimg2 from '../../Assets/Images/login/Hotel.png';
import leftimg3 from '../../Assets/Images/login/Ticket_iocn.png';
import leftimg4 from '../../Assets/Images/login/Travel_bg.png';

export default function Forgetpassword() {
    return(
    <div className="bk_login_wrapper">
        <h4>forgot</h4>
        <div className="bk_login_limg">
            <img src={logleftimg} alt="image" />
            <div className="bk_login_linner">
                <img src={leftimg1} alt="image" />
                <img src={leftimg2} alt="image" />
                <img src={leftimg3} alt="image" />
                <img src={leftimg4} alt="image" />
            </div>
        </div>
        <div className="bk_login_form">
            <div className="bk_login_head">
                <img src={logo} alt="logo"></img>
                <h1>Forgot Password</h1>
                <p>Don't Worry! It Happens. Please Enter the Address Associated With Your Account</p>
            </div>
            <form method='' action=''>
                <div className="bk_form_wrapper">
                    <label>Email<span>*</span></label>
                    <input type="email" name="email" id="email" className="form-control"/>
                </div>
                
                <button type="submit" className="bk_btn">Submit</button>
                <div className='bk_footer'>
                    <p><Link to="/login"><svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0001 6L1 6" stroke="#797979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.00003 11.0001L1 6.00003L6.00003 1" stroke="#797979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> 
                    Back to login</Link></p>
                </div>
            </form>
        </div>
    </div>
    )
}
