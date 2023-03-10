import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginComponent from '../Components/LoginComponent'

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            if (isAuthenticated) {
                navigate("/dashboard")
            }
        })()
    }, [isAuthenticated, navigate])

    return (
        <LoginComponent
            loginWithRedirect={loginWithRedirect}
        />
    )
}

export default Login