



import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate,Link } from 'react-router-dom';
import './LoginButton.css';
// import './LogoutButton.css'

const Login = () => {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
//   const {  user, isLoading } = useAuth0();


 

  useEffect(() => {
    const getAccessToken = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        setAccessToken(token);
        console.log(token);
      }
    };
    getAccessToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  const handleClick = () => {
    if (accessToken) {
      console.log(accessToken);
    } else {
      loginWithRedirect();
    }
  };
 
  return (
    <>
      {accessToken ? null : (
        <button className="btn btn-success" onClick={handleClick} style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
          Log In
        </button>
      )}
    </>
  );
};

export default Login;
