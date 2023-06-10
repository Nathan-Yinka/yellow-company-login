import React from "react";
import logo from "../assest/logo-menu.97ef1f90.svg";
import { FaCheck, FaLock, FaUser, FaQuestionCircle } from "react-icons/fa";
import {AiFillMessage} from "react-icons/ai"
import { useState } from "react";
const Card = () => {
    const [help,setHelp] = useState(false);
  return (
    <div>
    <form className="main-container" onSubmit={(e) => e.preventDefault()}>
      <div className="logo-con">
        <img src={logo} alt="logo" className="img-fluid"></img>
      </div>
      <div className="main-content">
        <div className="content-txt">
          <p>
            myAccount is now accessed <br></br>
            from myYellow there is no change <br></br>
            to your sign in details <br></br>
          </p>
        </div>
        <p className="sign-in">Sign In</p>

        <div className="input-form">
          <div className="form-field">
            <label htmlFor="username" className="d-block">
              <span className="form-container">
                <FaUser className="user icon" />
                <FaQuestionCircle className="question icon" />
                <input
                  type="email"
                  placeholder="Username"
                  name="username"
                  className="username"
                  id="username"
                ></input>
              </span>
            </label>
          </div>
        </div>

        <div className="input-form">
          <div className="form-field">
            <label htmlFor="password" className="d-block">
              <span className="form-container">
                <FaLock className="lock icon" />
                <FaQuestionCircle className="question icon" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="password"
                  id="password"
                ></input>
              </span>
            </label>
          </div>
        </div>

        <div className="input-form">
          <div className="form-field">
            <label htmlFor="remember-me" className="d-block">
              <span className="form-container">
                <FaCheck />
                <input
                  type="checkbox"
                  className="remember-me"
                  id="remember-me"
                ></input>
                <label htmlFor="remember-me">Remember me</label>
              </span>
            </label>
          </div>
        </div>
        <div className="submit-con">
          <button
            type="submit"
            className="submit-btn"
            onClick={(e) => e.preventDefault()}
          >
            Sign In
          </button>
        </div>

        <div className="help-con">
          <a href="#" className="help-dropdown" onClick={()=>setHelp(!help)} >Need help signing in?</a>
          {help && 
          <ul>
          <li>
            <a href="#" className="">Forget password</a>
          </li>
          <li>
            <a href="#">Register for myYellow</a>
          </li>
        </ul>
          }
        </div>
      </div>
    </form>
    <div className="helpbtn">
          <AiFillMessage/>
          Contact us
    </div>
    </div>
  );
};

export default Card;
