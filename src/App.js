import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Containers/Login';

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
