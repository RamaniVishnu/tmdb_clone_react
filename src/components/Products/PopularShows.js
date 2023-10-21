import React from 'react'
import ProductList from './ProductList'
import TitleForm from './TitleForm'

function PopularShows() {
  return (
    <div>
      <TitleForm />
      <ProductList style={{marginLeft: "50px",marginRight: "50px"}}/>
    </div>
  )
}

export default PopularShows