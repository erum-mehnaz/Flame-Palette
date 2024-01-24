import React, { useEffect, useState } from 'react'
import user_icon from "../Images/user.png"
import email_icon from "../Images/email.png"
import password_icon from "../Images/password.png"
import { useDispatch, useSelector } from 'react-redux'
import { LoggedIn, UpdateForm, ValidUser } from '../store/actions/Actions'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const LoginSignUp = ({setCheckLogin}) => {
  const formData = useSelector(state => state.Form);

      const [action,setAction]=useState(localStorage.getItem("currentAction") || "Login")
      const [formSubmitted, setFormSubmitted] = useState(false);
      const [showPassword, setShowPassword] = useState(false);
      const [flag,setFlag]=useState(false)
      const [Id,setId]=useState(0);
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      const navigate = useNavigate()
      const notifySuccessSignIn = () => {
        toast.success("Signed up successfully");
      };
      const notifySuccessLogin = () => {
        toast.success("Login successfully");
      };
      const notifyError = () => {
        toast.error("Email already exist")
      }
      const dispatch = useDispatch()

      useEffect(() => {
        const storedAction = localStorage.getItem('currentAction');
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
    
        if (storedAction) {
          setAction(storedAction);
        }
    
        if (storedFormData) {
          dispatch(UpdateForm(storedFormData));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('currentAction', action);
      }, [action]);

      // Handle Change
      const handleChange = (e) => {
        if (flag && (e.target.name === "name" || e.target.name === "email" )) {
          return;
        }
        const values= {[e.target.name]: e.target.value}
        dispatch(UpdateForm(values));
        localStorage.setItem('formData', JSON.stringify({ ...formData, ...values }));
  
      };

      // Handle Sign-Up
      const handleSignUp = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (Validation()) {
        const response = await axios.get(`http://localhost:3000/users?email=${formData.email}`);
         if (response.data.length > 0) {
          notifyError()
          return;
         } 
         else {
          const obj = await axios.post("http://localhost:3000/users", formData)
          if(obj.status === 201){
            notifySuccessSignIn()
            window.localStorage.setItem("isLoggedIn",true)
            // dispatch(LoggedIn(true))
            navigate("/login")
            setAction("Login")
          } 
          console.log('Form submitted:', formData);
          // dispatch(ValidUser(true))
         }
          
        }
      }
     
       // Login
      const handleLogin = async (e) => {
        e.preventDefault();
        setAction("Login");
        navigate("/login")
        setFormSubmitted(true);
        if(formData.email !==""){
          const res = await axios.get(`http://localhost:3000/users?email=${formData.email}`);
          if (res.data.length === 0) {
           setErrors({email: "* This email does not exist"})
           return;
          } 
          const user = res.data[0];
          if (user.password !== formData.password) {
            setErrors({ password: "* Incorrect password" });
            return;
          }
          console.log("Login successful:", formData);
          notifySuccessLogin()
          window.localStorage.setItem("isLoggedIn",true)
          // dispatch(LoggedIn(true))
          navigate("/")
          dispatch(ValidUser(true))
        }
      }

      // Validation
      const Validation = () => {
        if (formSubmitted) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
        
          const newErrors = {
            name: action === "Login" || formData.name.trim() !== '' ? '' : '* Name is required',
            email: emailRegex.test(formData.email) ? '' : '* Invalid email address',
            password: passwordRegex.test(formData.password) ? '' : '* Password must be at least 6 characters and include a digit',
            confirmPassword: formData.confirmPassword === formData.password ? '' : '* Password does not match'
          };
      
          setErrors(newErrors);
          return Object.values(newErrors).every(error => error === '');
        }
      }
      // Password toggle
    const togglePassword = () => {
    setShowPassword(!showPassword);
     };

     // Reset Password
     const resetPassword = async () => {
      if(formData.email !== ""){
      const res = await axios.get(`http://localhost:3000/users?email=${formData.email}`);
      if (res.data.length > 0) {
      setAction("Update Password");
      navigate("/reset-password")
      setErrors({password:""})
      setFlag(true)
      const firstUser = res.data[0];
      setId(firstUser.id)
      
      dispatch(UpdateForm({
        name: firstUser.name,
        email: firstUser.email,
      }))
      
     
    }}}

    // Update Handler
    const handleUpdate = async () =>{
      setFormSubmitted(true);
      if(Validation()){
        await axios.put(`http://localhost:3000/users/${Id}`,formData);
        dispatch(UpdateForm({
          name: '',
          email: '',
          password: '',
          confirmPassword:''
        }))
        setFlag(false); 
        navigate("/login")
        setAction("Login")
        setId(0);
      }
          
    }
    

  return (
    <div id='loginSignUpContainer'> 
    <div id='loginSignUpHeader'>
        <div id='text'>{action}</div>
        <div id='underLine'></div>
    </div>
    <div id='allInputs'>
        {action==="Login"? null:
        <>
         <div className='input'>
            <img src={user_icon} alt="" />
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder='Name' required/>  
        </div>
        <div className='error'>{errors.name}</div>
        </>
        }
        <div className='input'>
            <img src={email_icon} alt="" />
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='E-mail' required />
        </div>
        <div className='error'>{errors.email}</div>
        <div className='input'>
            <img src={password_icon} alt="" />
            <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' required/>
            <i className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'} onClick={togglePassword}></i>
        </div>
        <div className='error'>{errors.password}</div>
        {action === "Login" ? <button id='forgetPassBtn' onClick={resetPassword}> Forget Password ?</button>:null}
        {action==="Login"? null :<>
        <div className='input'>
            <img src={password_icon} alt="" />
            <input type={showPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder=' Confirm Password' required/>
            <i className={showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'} onClick={togglePassword}></i>
      </div>
        <div className='error'>{errors.confirmPassword}</div>
        </>}

    </div>
    {flag ? <div id='updateBtn' onClick={handleUpdate}>Update</div> : <>
    <div id={action==="Login"? "submitContainer1" : "submitContainer2"}>
        {action==="Login"? null :<div className="submit" onClick={handleSignUp}>Sign Up</div>}
        <div className="submit" onClick={handleLogin}>Login</div>
        {action==="Login"? <div id='loginStyle'>
          <p>New User ? <button onClick={()=>{
            setAction("Sign Up")
            navigate("/sign-up")
          }} > SignUp now </button> </p>
        </div>:null}
      
    </div>
    </>} 
   
    </div>
  )
}

export default LoginSignUp
