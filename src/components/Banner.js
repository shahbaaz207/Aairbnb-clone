import React, { useState } from 'react'
import {Button} from '@material-ui/core'
import Search from './Search'
import { Link } from 'react-router-dom'
const Banner = () => {

    const [showSearch,setShowSearch]=useState(false)
    return (
        <div className="banner">
        <div className="banner_search">
            <Button variant="outlined"
                onClick={()=>{
                setShowSearch(!showSearch)
            }}
             className="banner_searchButton">{!showSearch?("Search Dates"):("Hide")}</Button>
              {showSearch &&<Search/>}
        </div>
            <div className="banner_info">
                <h1>Get Out and Stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button variant="outlined"><Link to='/search'>Explore Nearby</Link></Button>
            </div>
        </div>
    )
}

export default Banner
