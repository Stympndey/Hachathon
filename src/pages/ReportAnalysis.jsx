import React from 'react';
import ReportUpload from '../components/ReportUpload';

function ReportAnalysis() {
  return (
    <div className="report-analysis-page">
      <h1>AI-Powered Report Analysis</h1>
      <p>Upload your health reports for AI-driven interpretation.</p>
      <ReportUpload />
    </div>
  );
}

export default ReportAnalysis;
