import React from 'react';
import Chatbot from '../components/Chatbot';

function HealthAssistant() {
  return (
    <div className="health-assistant-page">
      <h1>24/7 AI Health Assistant</h1>
      <p>Chat with our AI assistant for health-related queries and reminders.</p>
      <Chatbot />
    </div>
  );
}

export default HealthAssistant;
