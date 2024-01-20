// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
   
      <div className="App">
        {/* You can add a header or other common components here */}
        <Navbar/>
        <AllRoutes />
        {/* You can add a footer or other common components here */}
      </div>

  );
}

export default App;