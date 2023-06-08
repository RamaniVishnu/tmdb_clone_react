import React from 'react'
import './Footer.scss'

function Footer() {
    const Basics =[
        "About TMDB",
        "Contact Us",
        "Support Forums",
        "API",
        "System Status"
    ];
    const Involved =[ 
        "Contribution Bible",
        "Add New Movie",
        "Add New TV Show"];
    const Community =["COMMUNITY",
        "Guidelines",
        "Discussions",
        "Leaderboard",
        "Twitter"];

    const Legal =[
        "Terms of Use",
        "API Terms of Use",
        "Privacy Policy"];
  return (
    <div className='Footer'>
     <div className='footer_items'>
     <div className='items'>THE BASICS
     {
        Basics.map((elem,id)=> <h4 key={id}>{elem}</h4> )
    }
    </div>
    <div className='items'>GET INVOLVED
     {
        Involved.map((elem,id)=> <h4 key={id}>{elem}</h4> )
    }
    </div>
    <div className='items'>COMMUNITY
     {
        Community.map((elem,id)=> <h4 key={id}>{elem}</h4> )
    }
    </div>
    <div className='items'>LEGAL
     {
        Legal.map((elem,id)=> <h4 key={id}>{elem}</h4> )
    }
    </div>
    </div>

    </div>
  )
}

export default Footer