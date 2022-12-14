import { Notifications, Search,ArrowDropDown } from '@material-ui/icons'
import  {useState} from 'react'
import "./navbar.scss"
import {Link} from "react-router-dom"

const Navbar = () => {
  
  const [isScrolled , setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true );
    return () => (window.onscroll = null)
  }


  return (
    <div className={isScrolled ? "navbr scrolled" : "navbr"}>
        <div className="contaner">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo"/>
                <Link to="/" className="link"><span>HomePage</span></Link>
                <Link to="/movies" className="link"><span>Series</span></Link> 
                <Link to="/series" className="link"><span>Movies</span></Link>
                <span>New And Popular</span>
                <span>MyList</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
                <div className="profile">
                   <ArrowDropDown className="icon"/>
                   <div className="options">
                       <Link to="/profile"><span>Setting</span></Link>
                      <Link to="/dashboard"><span>Dashboard</span></Link>
                      <span>Logout</span>
                   </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Navbar