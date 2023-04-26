import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
if(!isAuthenticated){
return <Navigate to={loginWithRedirect()} /> 
}
  return children
   
}

export default Privateroute