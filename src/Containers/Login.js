import React from 'react'
import LoginComponent from '../Components/LoginComponent'
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <LoginComponent
            loginWithRedirect={loginWithRedirect}
        />
    )
}

export default Login