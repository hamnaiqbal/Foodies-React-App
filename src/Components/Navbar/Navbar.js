import React, { useState } from 'react'
import { HashLink as Link, NavHashLink } from 'react-router-hash-link';
import t from './tasty.png';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Form from './Form';
import { NavLink } from 'react-router-dom';






const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showF, setShowF] = useState(false);

  const display = () => {
    setShow(!show)
  }

  const DisplayForm = () => {
    setShowF(!showF)

  }


  return (
    <>
      <nav className="navbar fixed-top navbar-expand bg-light p-0">
        <div className="container-fluid">
          <Link className="navbar-brand mr-auto p-0" to="/">
            <img src={t} style={{ maxHeight: '100px', maxWidth: "100px" }}></img>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav  mx-auto">
              <NavHashLink className="nav-link" id='nav' activeClassName='active' exact aria-current="page" to="/home">Home</NavHashLink>
              <NavHashLink className="nav-link" id='nav' activeClassName='active' exact to="/home#about" >About</NavHashLink>
              <NavHashLink className="nav-link" id='nav' activeClassName='active' exact to="/home#top">Our Top Picks</NavHashLink>
              <NavHashLink className="nav-link" id='nav' activeClassName='active' exact to="/home#find">Find Us</NavHashLink>
            </div>
            <form className="d-flex ml-auto">
              <Link className="nav-link" onClick={display}><SearchIcon /></Link>
              {show ? <input className="form-control me-2 ExpandMe" id="display" type="search" placeholder="Search" aria-label="Search" /> : null}
              <Link className='nav-link'><AddShoppingCartIcon /></Link>
              <button type="button" class="btn btn-warning" onClick={DisplayForm}>Log In</button>
            </form>
          </div>
        </div>
      </nav>
      {showF ? <Form /> : null}

    </>
  )
}
export default Navbar;