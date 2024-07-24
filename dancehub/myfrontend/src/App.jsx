import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

import './index.css';
import reportWebVitals from './reportWebVitals';
//import Login from './components/login';
import SignUp from './components/signup';
import SignUp1 from './components/signup';
import FormIframe from './components/FormIframe';
import Register from './components/Register';
import Login from './components/Login1';
import CustomerCards from './components/cards';
import Choreographers from './components/team';
import Testimonials from './components/testimonials';

import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';



const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    return token ? children : <Navigate to="/login" />;
};

const App = () => {
    const { setToken } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/signup" element={<SignUp1 />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* <Route path="/service" element={<ServicesPage />} /> */}
                <Route path="/form" element={<FormIframe />} />
                <Route path="/customercard" element={<CustomerCards />} />
                <Route path="/choreographer" element={<Choreographers />} />
                <Route path="/testimonial" element={<Testimonials />} />
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route 
                    path="/protected" 
                    element={
                        <ProtectedRoute>
                            <ServicesPage />
                        </ProtectedRoute>
                    } 
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);
