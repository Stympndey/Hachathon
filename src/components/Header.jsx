import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../index.css';

function Header() {
  return (
    <header className="App-header-main">
      <nav className="App-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/report-analysis">Report Analysis</Link></li>
          <li><Link to="/test-recommendation">Test Recommendation</Link></li>
          <li><Link to="/facility-search">Facility Search</Link></li>
          <li><Link to="/health-assistant">Health Assistant</Link></li>
          <li><Link to="/patient-dashboard">Patient Dashboard</Link></li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}

export default Header;
