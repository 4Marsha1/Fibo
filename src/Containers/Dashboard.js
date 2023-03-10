import { useAuth0 } from '@auth0/auth0-react';

import DashboardComponent from '../Components/DashboardComponent'

const Dashboard = () => {
    const { logout } = useAuth0();

    return (
        <DashboardComponent
            logout={logout}
        />
    )
}

export default Dashboard