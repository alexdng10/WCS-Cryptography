import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import LoadingScreen from './LoadingScreen'; // Ensure this component is correctly implemented
import Home from './Home'; // Your Home component
import Duck from './Duck'; // Other components
import Shawn from './Pages/Shawn';
import Vanson from './Pages/Vanson';
import Web from './Pages/Web';
import Alex from './Pages/Alex';
import CeasarCipher from './crypto';

import './App.css'; // Ensure your styles are correctly applied


// Assuming logo is correctly imported or defined elsewhere in your project
import logo from './images/wcs_logo_transparent_background2.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // Add a new state to track if the animation should start
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Delay setting startAnimation to true to ensure it only happens once and after loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setStartAnimation(true); // Trigger animation after loading is done
    }, 1300); // Loading time

    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        {/* Keep loading screen in DOM but hide it to allow CSS transition */}
        <LoadingScreen isVisible={isLoading} /> {/* Pass isLoading as isVisible */}
        {/* Conditional rendering based on isContentVisible */}
        {!isLoading && (
          <>
            <header className={`App-header ${startAnimation ? 'fade-in' : ''}`}>
              <img src={logo} className={`App-logo ${startAnimation ? 'fade-in' : ''}`} alt="Logo" />
              <nav>
                <NavLink to="/idkLol">uhhhhh</NavLink>
                <NavLink to="/Vanson">Vanson</NavLink>
                <NavLink to="/Shawn">Shawn</NavLink>
                <NavLink to="/Web">Web</NavLink>
                <NavLink to="/Alex">Alex</NavLink>
                <NavLink to="/">Home</NavLink>
              </nav>
            </header>
            <main>
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* Other routes */}
                  <Route path="/idkLol" element={<Duck />} />
                  <Route path="/Web" element={<Web />} />
                  <Route path="/Shawn" element={<Shawn />} />
                  <Route path="/Vanson" element={<Vanson />} />
                  <Route path="/Alex" element={<Alex />} />
                </Routes>
           
              </div>
            </main>
          </>
        )}
      </div>
    )}

    
      <div className={`App ${isLoading ? 'is-blurred' : ''}`}>
        <header className="App-header">
          <img src={logo} alt="Logo"  className="App-logo"/>
            <nav>
              <NavLink to ="idkLol"> uhhhhh</NavLink>
              <NavLink to="Shawn">Shawn</NavLink>
              <NavLink to="Vanson">Vanson</NavLink>
              <NavLink to="Alex">Alex</NavLink>
              <NavLink to="Vanya">Vanya</NavLink>
              <NavLink to="/">Home</NavLink>

              
              
            </nav>
          </header>
          
          <main>
          
          <div className="content">
              
          
            
            
            <Routes>
              
            <Route path="/" element={<Home />} />

              <Route path="/idkLol" element={<Duck/>}/>
              <Route path="Web" element={<Web/>} />
              <Route path="Shawn" element={<Shawn/>} />
              <Route path="Vanson" element={<Vanson/>}/>
              <Route path="Vanya" element={<CeasarCipher/>}/>
              <Route path="Alex" element= {<Alex/>}/>

            </Routes> 
            
          </div>
          </main> 
        </div>
      
      </BrowserRouter> 
  );
}

export default App;