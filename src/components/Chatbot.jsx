import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { id: messages.length + 1, sender: 'user', text: input.trim() };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');

      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          text: `Hello! You asked: "${userMessage.text}". As an AI health assistant, I can provide general health information, symptom advice, and set reminders. For personalized medical advice, please consult a healthcare professional.`,
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <h2>AI Health Assistant</h2>
      <div className="chat-window">
        {messages.length === 0 ? (
          <p className="chat-welcome">Type your health-related queries here!</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`chat-message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))
        )}
      </div>
      <div className="chat-input-group">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Ask a health question or set a reminder..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
