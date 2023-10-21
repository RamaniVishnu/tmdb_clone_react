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
     <div className='items'><h3>THE BASICS</h3>
     {
        Basics.map((elem,id)=> <div className="item_list"><h4 key={id}>{elem}</h4></div> )
    }
    </div>
    <div className='items'><h3>GET INVOLVED</h3>
     {
        Involved.map((elem,id)=> <div className="item_list"><h4 key={id}>{elem}</h4></div> )
    }
    </div>
    <div className='items'><h3>COMMUNITY</h3>
     {
        Community.map((elem,id)=> <div className="item_list"><h4 key={id}>{elem}</h4></div> )
    }
    </div>
    <div className='items'><h3>LEGAL</h3>
     {
        Legal.map((elem,id)=> <div className="item_list"><h4 key={id}>{elem}</h4></div> )
    }
    </div>
    </div>

    </div>
  )
}

export default Footer
