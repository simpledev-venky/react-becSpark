import React from 'react'
import {NavLink} from "react-router-dom"
import logo from "./assets/logo.png"
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

  return (
    <>
    <header>
      <NavLink to= "/" className= 'title'>Bec  Spark </NavLink>
<img src= {logo} alt="Bec" className="logo" />

{isAuthenticated ? <button className='log-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>:<button className='log-btn' onClick={() => loginWithRedirect()}>Log In</button>}
    
    <nav className='navbar'>
<NavLink 
to="https://www.youtube.com/watch?v=nExsV3E83_k">Promo</NavLink>
<NavLink to= "https://smallpdf.com/file#s=ee56ef13-297b-4986-b529-d2a8bc2e7f05">
Magazine</NavLink>

<NavLink
 to="https://www.youtube.com/watch?v=iMW3RK3p2Ag">Memories</NavLink>
<NavLink to="/dev">Dev</NavLink>

    </nav>
    </header>

    </>
  )
}

export default Navbar

