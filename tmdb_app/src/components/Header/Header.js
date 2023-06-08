import React from 'react';
import './Header.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
    <div className='nav_items'>
        <Link to="/"><img alt="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" style={{width: "154px",height: "20px",marginTop: "5px"}}/></Link>
      

<select className="selection" name="movie" id="movies">

<option value="Browse" selected disabled hidden>Browse</option>
  <optgroup>
  <option value="popular">Popular</option>
  <option value="top-rated">Top Rated</option>
  <option value="upcoming">Upcoming</option>
  <option value="now-playing">Now playing</option>
</optgroup>
</select>
<select className="selection" >
<option value="TV Shows" selected disabled hidden>TV Shows</option>
<optgroup>
  <option value="popular">Popular</option>
  <option value="top-rated">Top Rated</option>
  <option value="on-tv">On Tv</option>
  <option value="airing-today">Airing Today</option>
  </optgroup>
</select>

<select className="selection"  name="movie" id="movies">
<option value="People" selected disabled hidden>People</option>
  <optgroup>
  <option value="popular"> Popular People</option> 
  <option value="bible">Contribution bible</option>
  <option value="apps">Apps</option>
  <option value="discussions">Discussions</option>
  <option value="leaderboard">Leaderboard</option>
  <option value="api">Api</option>
  <option value="support">Support</option>
  <option value="about">About</option>
  </optgroup>
</select>
<Link to="/about"><p>About</p></Link>
<Link to="/advancedabout"><p>Advanced About</p></Link>
<Link to="/form"><p>Form Application</p></Link>
<Link to="/survey"><p>Feedback on Application</p></Link>
<Link to="/samplequiz"><p>Sample Application</p></Link>

    </div>
    <Link to="/favourite"><div className='favourite'><FavoriteBorderIcon /></div></Link>
    <div className='login'>
      <button>Login</button>
    </div>
    </div>
  )
}

export default Header