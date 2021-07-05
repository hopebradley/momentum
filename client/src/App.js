import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        setLoggedIn(true);
      }
    });
  }, []);

  if (!loggedIn) return <Login setUser={setUser} />;


  return (
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/login" render={routerProps => <Login {...routerProps} setUser={setUser} />}/>
        <Route exact path="/signup" render={routerProps => <Login {...routerProps} setUser={setUser} />}/>
      </div>
    </Router>
  );
}

export default App;
