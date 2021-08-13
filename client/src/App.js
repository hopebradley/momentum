import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import Community from './components/Community';
import WorkoutForm from './components/WorkoutForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        setLoggedIn(true);
      }
    }); 
  }

  if (!loggedIn) return <Login setUser={setUser} setLoggedIn={setLoggedIn}/>;


  return (
    <Router>
      <div>
        <NavBar loggedIn={loggedIn} setUser={setUser} setLoggedIn={setLoggedIn} user={user}/>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/community" render={() => <Community />}/>
        <Route exact path="/profile" render={() => <Profile user={user} setLoggedIn={setLoggedIn} loadUser={loadUser}/>}/>
        <Route exact path="/new-workout" render={() => <WorkoutForm user={user} loadUser={loadUser}/>}/>
      </div>
    </Router>
  );
}

export default App;
