import React from 'react';
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
           <nav>
               <input type="checkbox" id="check"/>
               <label for="burger" className="burger">
                   <FontAwesomeIcon icon={faBars}/>
               </label>
               <label className="logo">reviewagon</label>
               <ul>
                   <li><a className="active" href="#">HOME</a></li>
                   <li><a href="#">Log Out</a></li>
               </ul>
           </nav>
        </div>
    );
};

export default Navbar;