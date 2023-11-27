import React, { useContext, useState } from 'react'
import style from '../css/productList.module.css'
import { ProductContext } from './context/ProductContext'
import { Button } from 'reactstrap';



function Filter() {
  const { filterProducts, filterByPrice, sortProducts, maxPrice, clearFilter, updateSearchTerm, searchTerm } = useContext(ProductContext);

    const [amt,setAmt]=useState(60000)
  const handleSorting = (event) => {
    sortProducts(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    const filterValue = event.target.value
    filterProducts(filterValue);

  };

  const handlePriceFilter = (event) => {
    const price = event.target.value
    filterByPrice(price)
    setAmt(price)
  }

  const clearFilterHandler=()=>{

    clearFilter()
  }

  
  return (
   <>

  <div className={style.outerlayer}>
    <div className={style.group}>
          <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={handleSorting}>
            <option value="default">Sort By:</option>
            <option value="asc">Price(low to high)</option>
            <option value="dsc">Price(high to low)</option>
            <option value="az">Name(a-z)</option>
            <option value="za">Name(z-a)</option>
          </select>
  
          <button type="button" className="btn btn-light m-1" value="all" onClick={handleFilterChange}>All</button>
          <button type="button" className="btn btn-light m-1" value="mobile" onClick={handleFilterChange}>Mobile</button>
          <button type="button" className="btn btn-light m-1" value="headphone" onClick={handleFilterChange}>Headphone</button>
          <button type="button" className="btn btn-light m-1" value="bag" onClick={handleFilterChange}>Bag</button>
          <button type="button" className="btn btn-light m-1" value="tshirt" onClick={handleFilterChange}>T-shirt</button>
         
          
    </div>

  </div>



      <div className={` ${style.filterDiv} `}>
      
          Sort Product
        <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={handleSorting}>
          <option value="default">Sort By:</option>
          <option value="asc">Price(low to high)</option>
          <option value="dsc">Price(high to low)</option>
          <option value="az">Name(a-z)</option>
          <option value="za">Name(z-a)</option>
        </select>
       
        <hr />
        Filter By Category
        <button type="button" className="btn btn-light m-1" value="all" onClick={handleFilterChange}>All</button>
        <button type="button" className="btn btn-light m-1" value="mobile" onClick={handleFilterChange}>Mobile</button>
        <button type="button" className="btn btn-light m-1" value="headphone" onClick={handleFilterChange}>Headphone</button>
        <button type="button" className="btn btn-light m-1" value="bag" onClick={handleFilterChange}>Bag</button>
        <button type="button" className="btn btn-light m-1" value="tshirt" onClick={handleFilterChange}>T-shirt</button>
        <hr />
        <div className={style.searchbox}>
          <input type="search" placeholder="Search product " id="searchField" autoComplete="off" value={searchTerm}
            onChange={(e) => updateSearchTerm(e.target.value)} />
        </div>
        <hr />
        Price
       
         <div style={{fontSize:'11px'}}>{amt}</div>
        <input type="range"  min={0} max={maxPrice} step={5000} value={amt} onChange={handlePriceFilter} />
          <br />
        <Button onClick={clearFilterHandler} color='primary' >Clear Filter</Button>
        <br />
      </div>
   </>
  )
}

export default Filter