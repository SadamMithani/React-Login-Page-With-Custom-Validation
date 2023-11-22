// App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Datatable from './Components/Datatable/Datatable';
import Header from './Components/Header/Header';
import Breadcrumbs from './Components/Breadcrumbs/breadcrumbs';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <div className="app-main-body-container">
                  <div className="app-main-left-body-container">
                    <Header />
                    <Breadcrumbs />
                    <Navigation />
                  </div>
                  <div className="app-main-right-body-container">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sidebar-types" element={<h1>This is /sidebar-types</h1>} />
                      <Route path="/ui-features" element={<h1>This is /ui-features</h1>} />
                      <Route path="/charts" element={<h1>This is /charts</h1>} />
                      <Route path="/icons" element={<h1>This is /icons</h1>} />
                      <Route path="/tables" element={<Datatable />} />
                      <Route path="/maps" element={<h1>This is /maps</h1>} />
                      <Route path="/invoice-summary" element={<h1>This is /invoice-summary</h1>} />
                      <Route path="/Pages" element={<h1>This is /Pages</h1>} />
                      <Route path="/multi-level-menu" element={<Datatable />} />
                    </Routes>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
