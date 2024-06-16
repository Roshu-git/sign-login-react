import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import logleftimg from '../../Images/login/logimg.png';
import logo from '../../Images/Logo.png';
import leftimg1 from '../../Images/login/Event.png';
import leftimg2 from '../../Images/login/Hotel.png';
import leftimg3 from '../../Images/login/Ticket_iocn.png';
import leftimg4 from '../../Images/login/Travel_bg.png';

export default function Login() {
    const navigate = useNavigate();
    
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=faa782653f5b22491ae20b5a672c9674cf3934ea");

    const[formData, setFormdata]= useState({
        fname:'',
        // lname: '',
        email: '',
        password:'',
        // cpassword:'',
    });
    const[errors, setErrors] = useState({});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormdata({...formData, [name]: value});
    }
    // console.log(" formdata" +formData)
    const handleSubmit = async (e)=>{
        console.log(formData);
        e.preventDefault();
        const newErrors = {};
        if(!formData.fname){
            newErrors.fname = 'first name is required.';
        }
        // if(!formData.lname){
        //     newErrors.lname = 'last name is required.';
        // }
        if(!formData.email){
            newErrors.email = 'email is required.';
        }else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'email is invalid.';
        }
        if(!formData.password){
            newErrors.password = 'password is required.';
        }
        // if(formData.password !== formData.cpassword){
        //     newErrors.cpassword = 'password not match.';
        // }
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
        }else {
            console.log("before fetch",formData);
            const formDataToSend = new FormData();

            // Append form data to FormData object
            formDataToSend.append("email", formData.email);
            formDataToSend.append("name", formData.fname);
            formDataToSend.append("password", formData.password);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formDataToSend,
                redirect: "follow"
              };

              fetch("https://plrfunnels.in/home/signupAPI", requestOptions)
                .then((response) => response.text())
                .then((result) => 
                    console.log("Succesfully login",result),
                    toast('Registerd Succefully'),
                    <ToastContainer />,
                    navigate('/login')
                )
                .catch((error) => 
                    console.error("login Failed",error),
                toast('login failed'),
                <ToastContainer />
            );
        }
    };
    return(
    <div className="bk_login_wrapper">
        <div className="bk_login_limg">
            <img src={logleftimg} alt="ban-image" />
            <div className="bk_login_linner">
                <img src={leftimg1} alt="ba-image1" />
                <img src={leftimg2} alt="ba-image2" />
                <img src={leftimg3} alt="ba-image3" />
                <img src={leftimg4} alt="ba-image4" />
            </div>
        </div>
        <div className="bk_login_form">
            <div className="bk_login_head">
                <img src={logo} alt="logo"></img>
                <h1>Hello! Welcome Back</h1>
                <p>Please Signup To Create Your Account.</p>
            </div>
            <form method='' action='' onSubmit={handleSubmit}>
                {/* <div className="bk_input_wrapper"> */}
                <div className="bk_form_wrapper">
                    <label>First Name<span>*</span></label>
                    <input type="text" name="fname" className="form-control" value={formData.fname} onChange={handleChange} />
                    {errors.fname && <span className='error'>{errors.fname}</span>}
                </div>
                {/* <div className="bk_form_wrapper">
                    <label>Last Name<span>*</span></label>
                    <input type="text" name="lname" className="form-control" value={formData.lname} onChange={handleChange} />
                    {errors.lname && <span className='error'>{errors.lname}</span>}
                </div> */}
                {/* </div> */}
                <div className="bk_form_wrapper">
                    <label>Email<span>*</span></label>
                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>
                {/* <div className="bk_input_wrapper"> */}
                    <div className="bk_form_wrapper">
                        <label>Password<span>*</span></label>
                        <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
                        {errors.password && <span className='error'>{errors.password}</span>}
                    </div>
                    {/* <div className="bk_form_wrapper">
                        <label>Confirn Password<span>*</span></label>
                        <input type="password" name="cpassword" className="form-control" value={formData.cpassword} onChange={handleChange} />
                        {errors.cpassword && <span className='error'>{errors.cpassword}</span>}
                    </div> */}
                {/* </div> */}
                <button type="submit" className="bk_btn">Signup</button>
            </form>
                <div className='bk_footer'>
                    <p>Don't have an account? <Link to="/login">Login!</Link></p>
                </div>
        </div>
    </div>
    )
}
