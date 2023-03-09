import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Containers/Login';
import Dashboard from './Containers/Dashboard';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Login />}
                    key="route-login-screen"
                />
                <Route
                    exact
                    path="/dashboard"
                    element={<Dashboard />}
                    key="route-dashboard-screen"
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
