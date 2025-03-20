import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import LoginForm from './LoginForm';
import Homepage from './Homepage';
import AgregarEmpresa from './AgregarEmpresa';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/agregar-empresa" element={<AgregarEmpresa />} />
            </Routes>
        </Router>
    );
}

export default App;