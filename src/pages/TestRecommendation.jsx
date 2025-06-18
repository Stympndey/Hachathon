import React from 'react';
import TestRecommendationDisplay from '../components/TestRecommendationDisplay';

function TestRecommendation() {
  return (
    <div className="test-recommendation-page">
      <h1>Next Test Recommendation Engine</h1>
      <p>Get personalized diagnostic test recommendations based on your health data.</p>
      <TestRecommendationDisplay />
    </div>
  );
}

export default TestRecommendation;
