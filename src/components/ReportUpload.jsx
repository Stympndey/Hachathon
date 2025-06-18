import React, { useState } from 'react';

function ReportUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setMessage('');
  };

  const handleUpload = () => {
    if (selectedFile) {
      setMessage(`File "${selectedFile.name}" selected for upload. AI analysis coming soon!`);
      console.log('Uploading file:', selectedFile.name);
    } else {
      setMessage('Please select a file to upload.');
    }
  };

  return (
    <div className="report-upload-container">
      <h2>Upload Health Report</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload and Analyze
      </button>
      {message && <p className="upload-message">{message}</p>}
    </div>
  );
}

export default ReportUpload;
