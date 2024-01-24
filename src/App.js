import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import LoginSignUp from "./components/LoginSignUp";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.css";
import ProdDetail from "./components/ProdDetail"

function App() {
  const validUser = useSelector((state) => state.validUser);
  const [loggedIn,setLoggedIn]=useState(false)
  const login = () => {
    if(window.localStorage.getItem("isLoggedIn") === "true"){
      setLoggedIn(true)
     }
  }
  console.log(">>>>>>", window.localStorage.getItem("isLoggedIn"))
  console.log("validUser", validUser)
  console.log("loggedIn", loggedIn)

  useEffect(() => {
    login();
  }, []);

  const Product = useSelector((state) => state.Product);
  if (!loggedIn && !validUser) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <Router>
          <>
          <div className="wrapper">
          {(validUser || loggedIn) && <Header setLoggedIn={setLoggedIn}/>}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product-detail" element={<ProdDetail />} />
              <Route path="/login" element={ <>
                <div id="loginSignUpStyle"><LoginSignUp/></div><div><Header/><Home /></div></> }/> 
              <Route path="/sign-up" element={ <>
                <div id="loginSignUpStyle"><LoginSignUp/></div><div><Header/><Home /></div></> }/>  
              <Route path="/reset-password" element={ <>
                <div id="loginSignUpStyle"><LoginSignUp/></div><div><Header/><Home /></div></> }/>    

              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            <Footer />
          </div>
          </>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
