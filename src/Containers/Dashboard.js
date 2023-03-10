import React from 'react'
import DashboardComponent from '../Components/DashboardComponent'
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
    const { logout } = useAuth0();
    return (
        <DashboardComponent
            logout={logout}
        />
    )
}

export default Dashboard