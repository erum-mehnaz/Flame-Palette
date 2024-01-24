import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../Images/Logo.png'
import '@fortawesome/fontawesome-free/css/all.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { RESET_VALID_USER, ResetForm } from '../store/actions/Actions';


const Header = ({setLoggedIn}) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const formData = useSelector(state => state.Form);
  const navigate = useNavigate()
  const [showConfirmation, setShowConfirmation] = useState(false);
  //Fetch Name
  const fetchName = async () => {
    // console.log("test: ", formData)
    const res = await axios.get(`http://localhost:3000/users?email=${formData.email}`);
    if (res.data.length > 0) {
      const user = res.data[0];
           window.localStorage.setItem("userName",user.name)
          } 
  }
  useEffect(() => {
    fetchName();
  }, [formData.email]);
  const User = window.localStorage.getItem("userName")

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const showLogoutConfirmation = () => {
    setShowConfirmation(true);
  };

  const hideLogoutConfirmation = () => {
    setShowConfirmation(false);
  };

  const logoutHandler = () => {
      window.localStorage.removeItem("isLoggedIn") 
      window.localStorage.removeItem("userName") 
      localStorage.clear()
      setLoggedIn(false)
      setShowConfirmation(false);
      dispatch({type: RESET_VALID_USER})
      navigate("/login")
      dispatch(ResetForm())
      // window.location.reload()
  }

  return (
<div className='header'>
  <div id='logo'>
  <img src={Logo} alt="logo-Img" />
  </div>
  <div id='headerList'>
    <div><Link to="/">Home</Link></div>
    <div><Link to="/about">About</Link></div>
    <div><Link to="/contact">Contact</Link></div>
  </div>
  <div>
        <div className="dropdown">
        <div className="dropdownOption" onClick={toggleDropdown}>
        <i className="fa fa-user"></i>
          <p>{User}</p>
        </div>
        {isOpen && (
          <div onClick={showLogoutConfirmation} className="dropdownOption">
              <i className="fa fa-arrow-right-from-bracket"></i>
              <p>Logout</p>
          </div>
        )}
      </div>
    </div>
    {showConfirmation && (
        <div className="modal">
          <div className="modalContent">
            <i className="fa fa-circle-question"></i>
            <p>Are you sure you want to logout?</p>
            <div>
              <button onClick={logoutHandler}>Yes</button>
              <button onClick={hideLogoutConfirmation}>Cancel</button>
            </div>
          </div>
        </div>
      )}
</div>

  )
}

export default Header
