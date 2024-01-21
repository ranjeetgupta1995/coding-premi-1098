// src/App.js
import React from 'react';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer'


function App() {
  return (
   
      <div className="App">
        {/* You can add a header or other common components here */}
        <Navbar />
        <AllRoutes />
        <Footer />
        {/* You can add a footer or other common components here */}
      </div>

  );
}

export default App;