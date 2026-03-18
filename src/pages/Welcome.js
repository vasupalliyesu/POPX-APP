import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Welcome.css';

function Welcome(){
    const navigate = useNavigate();
    return(
        <div className="container">
            <div className="bottom-section">
                <h2>Welcome to PopX</h2>
                <p>Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit,</p>

                <button className="primary-btn" onClick={()=>navigate("/register")}>Create Account</button>

                <button className="secondary-btn" onClick={()=>navigate("/login")}>Already Registered? Login</button>
            </div>
        </div>
    );
}
export default Welcome;