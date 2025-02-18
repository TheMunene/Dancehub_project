import React from 'react';
import AOS from 'aos';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './components/login';
import SignUp from './components/signup';
import SignUp1 from './components/signup';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
