import logo from '../logo.svg';
import '../App.css';
import {  Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Landing Page</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the landing page of our application!
        </p>
        <Link to="/home">Go to Home Page</Link>
        <Link to="/test">Go to test Page</Link>
      </header>
    </div>
  );
}

export default LandingPage;