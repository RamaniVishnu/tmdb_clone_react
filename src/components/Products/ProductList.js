import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import { Link, Outlet } from 'react-router-dom';

function ProductList() {
  const [values,setValues] = useState('');
  useEffect(()=>{
    setValues(document.querySelectorAll('.anchor'));
  },[])


  const toggleItem = (e,elem) => {
    for (let i=0;i<values.length;i++) {
          if (e.target !== elem[i]) {
            elem[i].classList.remove('activeheader');
          } else {
            elem[i].classList.add('activeheader')
          }
      
    };
  }


  return (
    <div>
        <div className='product_header'>
        <h2 className='popular_header'>What's Popular</h2>
        <div className='selector_wrap' onClick={(event)=>toggleItem(event,values)}>
        <Link to="/"><div className='anchor activeheader' >Streaming</div></Link>
        <Link to="/tv"><div className='anchor'>On TV</div></Link>
        <Link to="/rent"><div className='anchor'>For Rent</div></Link>
        <Link to="/theatre"><div className='anchor'>In Theatres</div></Link>
        </div>
        </div>
        <div className='Products'>
        <Outlet />
        </div>
    </div>
  )
}

export default ProductList
