import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ReportAnalysis from './pages/ReportAnalysis';
import TestRecommendation from './pages/TestRecommendation';
import FacilitySearch from './pages/FacilitySearch';
import HealthAssistant from './pages/HealthAssistant';
import PatientDashboard from './pages/PatientDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/report-analysis" element={<ReportAnalysis />} />
            <Route path="/test-recommendation" element={<TestRecommendation />} />
            <Route path="/facility-search" element={<FacilitySearch />} />
            <Route path="/health-assistant" element={<HealthAssistant />} />
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; 2025 myOnsite™ HealthCare. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
