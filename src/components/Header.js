import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'

import {Avatar} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
           <Link to='/'> <img className="header_icon" 
                src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/31/1406814966687/Airbnbs-new-logo-has-been-009.jpg?width=300&quality=85&auto=format&fit=max&s=c8a8548b7af54a2af6ab46fb05691b1a"
               alt=""
             /></Link>
             
             <div className="header_center">
                 <input type="text"/>
                 <SearchIcon/>
             </div>
             <div className="header_right">
                 <p>Become a host</p>
                    <LanguageIcon/>
                    <ExpandMoreIcon/>
                    <Avatar/>
             </div>

        </div>
    )
}

export default Header