import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './input.css'
import { BrowserRouter as Router} from 'react-router-dom';
import { ResultsContextProvider } from './Contexts/ResultsContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultsContextProvider>
      <Router>
        <App />
      </Router>
    </ResultsContextProvider>
    
  </React.StrictMode>
);


