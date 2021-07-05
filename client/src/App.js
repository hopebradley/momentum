import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/login" render={() => <Login />}/>
      </div>
    </Router>
  );
}

export default App;
