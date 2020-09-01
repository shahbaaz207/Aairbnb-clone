import React from 'react'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>62 stays- 26 august to 30 augest - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Flexibility</Button>
                <Button variant="outlined">Olace</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://images.wsj.net/im-71583?width=620&size=1.5"
                location="Private room in center of Mumbai"
                title="stay at this spacious Edwardian House"
                description="1 guest - 1 badroom -1 bed -1.5 shared bathroom -wifi - kitchen- Free parking - washing Machine"
                star={4.3}
                price="$200/night"
                total="$319 total"
            />

             <SearchResult
                img="https://bnbnomad.com/wp-content/uploads/2020/06/Ellis-House_1.jpg"
                location="Private room in center of Mumbai"
                title="stay at this spacious Edwardian House"
                description="1 guest - 1 badroom -1 bed -1.5 shared bathroom -wifi - kitchen- Free parking - washing Machine"
                star={4.9}
                price="$200/night"
                total="$319 total"
            />

             <SearchResult
                img="https://bnbnomad.com/wp-content/uploads/2020/06/Ellis-House_1.jpg"
                location="Private room in center of Mumbai"
                title="stay at this spacious Edwardian House"
                description="1 guest - 1 badroom -1 bed -1.5 shared bathroom -wifi - kitchen- Free parking - washing Machine"
                star={3.6}
                price="$200/night"
                total="$319 total"
            />

             <SearchResult
                img="https://www.phocuswire.com/uploadedImages/Articles/News/2020/March/airbnb-china.jpg?origwidth=800&origheight=400&origmode=crop&Anchor=MiddleCenter&width=600&height=300&scale=both&mode=crop"
                location="Private room in center of Mumbai"
                title="stay at this spacious Edwardian House"
                description="1 guest - 1 badroom -1 bed -1.5 shared bathroom -wifi - kitchen- Free parking - washing Machine"
                star={5}
                price="$200/night"
                total="$319 total"
            />

             <SearchResult
                img="https://cdn.businesstraveller.com/wp-content/uploads/fly-images/951840/Airbnb1-916x516.jpg"
                location="Private room in center of Mumbai"
                title="stay at this spacious Edwardian House"
                description="1 guest - 1 badroom -1 bed -1.5 shared bathroom -wifi - kitchen- Free parking - washing Machine"
                star={4.1}
                price="$200/night"
                total="$319 total"
            />
        </div>
    )
}

export default SearchPage
