import React, { useEffect, useState } from 'react';
import './Header.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import CustomDropdown from './CustomDropdown';

function Header() {
  const data = useSelector((store)=> store.favouriteSlice.items);
  const [displayCount,setCount] = useState(false);
  const [subMenu,setSubMenu]= useState([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  function openmenu(e){
    let mem= e.target;
    for(let i=0;i<subMenu.length;i++) {
      if(subMenu[i] === mem){
        console.log("success");
        subMenu[i].childNodes[1].style.display ='block';
      }
      else {console.log("fail");
    subMenu[i].childNodes[1].style.display='none'}

    }
    e.stopPropagation();
  }

  return (
    <div className='header'>
    <div className='content'>
    <div className='desktoplogo'>
    <Link to="/"><img alt="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" style={{width: "154px",height: "20px",marginTop: "10px"}}/></Link>
    </div>

  <div className='desktopNav'>
  <CustomDropdown label="Select an option" options={['Popular', 'Top Rated', 'Upcoming','Now Playing']} itemName={'Movies'} 
    index={0}
        openDropdownIndex={openDropdownIndex}
        setOpenDropdownIndex={setOpenDropdownIndex}
  />
      <CustomDropdown label="Movies" options={['Popular', 'Top', 'On TV','Airing Today']} itemName={'TV shows'}
        index={1}
        openDropdownIndex={openDropdownIndex}
        setOpenDropdownIndex={setOpenDropdownIndex}
      />
      <CustomDropdown label="People" options={['Popular People', 'Contribution', 'Apps','Support','About']} itemName={'People'} 
        index={2}
        openDropdownIndex={openDropdownIndex}
        setOpenDropdownIndex={setOpenDropdownIndex}
      />
      <CustomDropdown label="Select" options={['Discussions', 'Leaderboard', 'Api']} itemName={'More'} 
        index={3}
        openDropdownIndex={openDropdownIndex}
        setOpenDropdownIndex={setOpenDropdownIndex}
      />
      </div>
<nav style={{width: '111px'}} onClick={(e)=>{
  setCount(!displayCount);
  setTimeout(()=>{
    setSubMenu(()=>document.getElementsByClassName('mob_header')[0].childNodes);
  },1000);
}}>
    <ReorderOutlinedIcon style= {{fontSize: "23px",color: "white",width: "111px",marginTop: '8px',marginLeft: '-30px'}} />
    <ul style={{display: displayCount ?  'inline-block' : "none" }} className="mob_header">
    <ul  name="movie" id="movies" onClick={(e)=>openmenu(e)}>Movies
    <li id="one" style={{display: "none"}}>
  <li value="popular">Popular</li>
  <li value="top-rated">Top Rated</li>
  <li value="upcoming">Upcoming</li>
  <li value="now-playing">Now playing</li>
  </li>
</ul>
<ul name ="TVShows" id="TVShows" className="selection" onClick={(e)=>openmenu(e)}>
TV Shows
<li style={{display: "none"}}>
  <li value="popular">Popular</li>
  <li value="top-rated">Top Rated</li>
  <li value="on-tv">On Tv</li>
  <li value="airing-today">Airing Today</li>
  </li>
</ul>

<ul name="People" id="People" className="selection" onClick={(e)=>openmenu(e)} >
People
<li style={{display: "none"}}>
  <li value="popular"> Popular People</li> 
  <li value="bible">Contribution</li>
  <li value="apps">Apps</li>
  <li value="support">Support</li>
  <li value="about">About</li>
</li>
</ul>

<ul name="More" id="More" className="selection" onClick={(e)=>openmenu(e)} >
More
<li style={{display: "none"}}>
<li value="discussions">Discussions</li>
  <li value="leaderboard">Leaderboard</li>
  <li value="api">Api</li>
</li>
</ul>
</ul>
    </nav>
    <div className='logo'>
    <Link to="/"><img alt="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" style={{width: "55px",height: "40px",marginTop: "5px"}}/></Link>
    </div>
    </div>
    <div style={{display:'flex',marginRight: '30px'}}>
    <Link style={{textDecoration:"none",display:'flex'}} to="/favourite">
    <div className='favourite'>
    <FavoriteBorderIcon style={{fontSize: '25px'}}/>
    <p className='fcount'>{data.length > 0 ? data.length : 0 }</p>
    </div>
    </Link>
    <div className='login'>
     <AccountCircleIcon style={{width: "30px",height: "50px",color: "white"}} />
    </div>
    </div>
    </div>
  )
}

export default Header
