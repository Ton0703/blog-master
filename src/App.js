import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import Main from './routes/main'

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
