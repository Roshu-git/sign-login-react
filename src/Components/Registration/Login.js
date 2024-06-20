import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logleftimg from '../../Assets/Images/login/logimg.png';
import logo from '../../Assets/Images/Logo.png';
import leftimg1 from '../../Assets/Images/login/Event.png';
import leftimg2 from '../../Assets/Images/login/Hotel.png';
import leftimg3 from '../../Assets/Images/login/Ticket_iocn.png';
import leftimg4 from '../../Assets/Images/login/Travel_bg.png';

export default function Login() {
    const navigate = useNavigate();
    const[formData, setFormdata]= useState({
        email: '',
        password:'',
    });
    const[errors, setErrors] = useState('');
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormdata({...formData, [name]: value});
    }
        const handleLogin = async (e)=>{
        e.preventDefault();
        const newErrors ={};
        if(!formData.email){
            newErrors.email='email is required';
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            newErrors.email ='email is invalid';
        }
        if(!formData.password){
            newErrors.password ='password is required';
        }
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
        }else{
            console.log(formData);
                const queryParams = new URLSearchParams();
                queryParams.append("email", formData.email);
                queryParams.append("password", formData.password);
                 
                console.log("after query param",queryParams);
                for (let pair of queryParams.entries()) {
                    console.log(pair[0] + ': ' + pair[1]);
                  }
                const requestOptions = {
                method: "POST",
                body: queryParams,
                redirect: "follow"
                };

                fetch("https://plrfunnels.in/home/loginAPI", requestOptions)
                .then((response) => response.text())
                .then((result) => {console.log("result", result);
                const resarray = JSON.parse(result);
                console.log("array response:",resarray);
                console.log("status value:", resarray.status);

                if(resarray.status === 0){
                    console.error("login fail...");
                    toast("Login Failed.", { onClose: () => navigate('/login')});
                }
                else if(resarray.status === 1){
                    console.log("sucess");
                    toast.success("Login succefully",{
                        onClose: ()=> navigate('/Dashboard')
                    });
                }
            }
                )
                .catch((error) => console.error(error))
               
        }
    }
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
                <p>Please Login To Your Account To Continue.</p>
            </div>
            <form method='' action='' onSubmit={handleLogin}>
                <div className="bk_form_wrapper">
                    <label>Email<span>*</span></label>
                    <input type="email" name="email" value={formData.email} className="form-control" onChange={handleChange} />
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>
                <div className="bk_form_wrapper">
                    <label>Password<span>*</span></label>
                    <input type="password" name="password" value={formData.password} className="form-control" onChange={handleChange}/>
                    {errors.password && <span className='error'>{errors.password}</span>}
                </div>
                <div className="bk_remember_sec">
                    <div className="bk_remember">
                        <input type='checkbox' />Remember Me
                    </div>
                    <div className="bk_forget_pass">
                        <Link to="/forgot">Forget Password?</Link>
                    </div>
                </div>
                <button type="submit" className="bk_btn">login</button>
                <div className='bk_footer'>
                    <p>Don't have an account? <Link to="/signup">Sign up!</Link></p>
                </div>
            </form>
        </div>
    </div>
    )
}
