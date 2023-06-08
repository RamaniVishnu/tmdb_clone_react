import React, { useState } from 'react'
import './TitleForm.scss';
import { mokeSearch } from '../../utils/mock-search';

//debouncing
import SearchBar from './SearchBar';

function TitleForm() {

  // const selectedItem =(item)=>{
  //   console.log('item===',item);
  //   setDataSearch(item)
  // }
  return (
    <div className='Banner_wrapper'>
    <div className='Banner'>
        {/* <img className="Banner_image" src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/VlHt27nCqOuTnuX6bku8QZapzO.jpg" alt="title img" /> */}
    <div className='title_form'>
    <h2>Welcome.</h2>
    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
    <form className='Banner_form'>
    <label>
      <SearchBar/>
    {/* <div className='search-list'>
    {mokeSearch.filter((elem)=>{
      const listElem = elem.toLowerCase();
      const searchText = search.toLowerCase();
      return (
        searchText && listElem.startsWith(searchText) && searchText !== listElem
      )
    })
    .slice(0)
    .map((list,index)=>(
      <div className="select-elem" key={index} onClick={()=>selectedItem(list)}>
      {list}
      </div>

    ))
    }
    </div> */}
    </label>
    <button className="Form_submit" type="submit">Search</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default TitleForm