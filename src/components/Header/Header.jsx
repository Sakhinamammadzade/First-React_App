import Login from "../Login/Login"
import '../Header/header.scss'

function Header(){
    return(
        <div id="header">
             <div className="logo">
                 <img src="https://compar.edu.az/staticfiles/defaults/img/compar%20logo1%402x.png" alt="Compar Academy"/>
             </div>
             <div className="navmenu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Contact</li>
                    
                </ul>
             </div>  
             <div className="join">
                 <button>Join Us</button>
             </div>
        </div>
    )
          
}
export default Header