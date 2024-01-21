// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';


function App() {
  return (
   
      <div className="App">
        {/* You can add a header or other common components here */}
        <Navbar/>
        <AllRoutes />
        <Footer/>
        {/* You can add a footer or other common components here */}
        <Course />
      </div>

  );
}

export default App;