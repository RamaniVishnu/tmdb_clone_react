import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import { Link, Outlet } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ProductList() {
  const [values,setValues] = useState('');
  const [display,setDisplay]= useState(false);
  const [productVal,setProductList]= useState('Streaming')

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

  const toggleProduct=(e)=>{
    console.log("event=",e);
    setDisplay(!display);

  }

  const selectElem=(e)=>{
    setProductList(e.target.textContent)
  }


  return (
    <div style={{width : '100%'}}>
        <div className='product_header'>
        <h2 className='popular_header'>What's Popular</h2>
        <div className='selector_wrap' onClick={(event)=>toggleItem(event,values)}>
        <Link to="/"><div className='anchor activeheader' >Streaming</div></Link>
        <Link to="/tv"><div className='anchor'>On TV</div></Link>
        <Link to="/rent"><div className='anchor'>For Rent</div></Link>
        <Link to="/theatre"><div className='anchor'>In Theatres</div></Link>
        </div>
        <ul onClick={toggleProduct} className='selectorwrap_mob' style={{backgroundColor: 'rgb(30, 213, 169)'}}> <span style={{position:'relative'}}>{productVal} <ExpandMoreIcon className='MuiSvgIcon-root'/></span>
          { display ? <div onClick={selectElem} className='selector_mob'>
          <Link to="/theatre"><li value='In Theatres'>In Theatres</li></Link>
          <Link to="/"><li value='Streaming'>Streaming</li></Link>
          <Link to="/tv"><li value='On TV'>On TV</li></Link>
          <Link to="/rent"><li value='For Rent'>For Rent</li></Link>
          </div>: ''}
        </ul>
        </div> 
        <div className='Products'>
        <Outlet />
        </div>
    </div>
  )
}

export default ProductList
