import React, { useState } from 'react'
import './TitleForm.scss';
import { Link } from 'react-router-dom';
//debouncing
import SearchBar from './SearchBar';


function TitleForm() {
  const [searchQueryId,setSearchQueryId] = useState();

  return (
    <div className='Banner_wrapper'>
    <div className='title_form'>
    <h2>Welcome.</h2>
    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
    <form className='Banner_form'>
    <label style={{width: '100%'}}>
      <SearchBar setSearchQueryId={setSearchQueryId}/>
    </label>
    <Link to={`/product/movies/${searchQueryId}`}><button className="Form_submit" type="submit">Search</button></Link>
    </form>
    </div>
    </div>
  )
}

export default TitleForm
