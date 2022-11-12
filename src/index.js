import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles.css'
import Index from "./Compounents/Challenge1";
import CompounentsEssay from "./Compounents/CompounentsEssay";
import {PropsPractice} from "./Compounents/PropsPractice";
import Challenge1 from "./Compounents/Challenge1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PropsPractice/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
