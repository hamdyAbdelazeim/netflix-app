import {Link} from "react-router-dom"
import "./login.scss";

const Login = () => {
     
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Enter email or phone number"/>
                <input type="password" placeholder="Enter password"/>
                <button className="loginbutton">Sign In</button>
                <span>New To Netflix ?<Link to="/signup"><b>Sign Up Now</b></Link></span>
                <small>this page is protected by google reCHAPCH To ensure you are not abot. <b>learn more</b> </small>

            </form>
        </div>
    </div>
  )
}

export default Login