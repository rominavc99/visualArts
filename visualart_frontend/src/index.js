import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <GoogleOAuthProvider clientId="825616375923-47dgi1prnmq4q9gpdpel7c37dq0h3q13.apps.googleusercontent.com">
            <App />    
        </GoogleOAuthProvider>;
    
    </Router>,
);

