import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Productcontext } from '../../context/product'
const Header = () => {
  const {cart,Search,setsearch}=useContext(Productcontext)
  return (
    <header>
      <Link to={'/'} ><h1>Babu Shop</h1></Link>
      <input type="text" placeholder='Search' id='SearchBox' value={Search} onChange={(e)=>{setsearch(e.target.value)}} autoFocus />
      <nav>
        <ul>
          <Link to={'/'}>
          <li>Home</li>
          </Link>
    <Link to={'/viewcart'}>
          <li> <span id='Count'>{cart.length}</span>View Cart</li>
    </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
