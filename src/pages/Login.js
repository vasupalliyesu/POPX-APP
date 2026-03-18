import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login(){
    const navigate = useNavigate();
    
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleLogin=()=>{
        if(email&&password){
              navigate("/Account");
        }

    };
    return(
        <div className="login-container">
            <div className="login-box">
                <h2>Sign in to your PopX account</h2>
                 <p>Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit,</p>

                 <label>Email Address</label>
                 <input type="email" placeholder="Enter email address" 
                  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  
                <label>Password</label>
                <input type="password" placeholder="Enter password"
                 value={password} onChange={(e)=>setPassword(e.target.value)}/>

                 <button className="login-btn"
                  onClick={handleLogin}
                  disabled={!email||!password}
                  >Login</button>

            </div>
        </div>
    );
}
export default Login;