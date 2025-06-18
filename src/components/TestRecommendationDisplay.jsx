import React from 'react';

function TestRecommendationDisplay() {
  const recommendations = [
    { id: 1, test: 'Complete Blood Count (CBC)', justification: 'To assess overall health and detect a variety of disorders, including anemia, infection, and leukemia.' },
    { id: 2, test: 'Lipid Panel', justification: 'To measure cholesterol and triglyceride levels, assessing risk for cardiovascular disease.' },
    { id: 3, test: 'Fasting Blood Glucose', justification: 'To screen for diabetes or pre-diabetes by measuring blood sugar levels after an overnight fast.' },
    { id: 4, test: 'Thyroid Stimulating Hormone (TSH)', justification: 'To check thyroid gland function and diagnose thyroid disorders.' },
    { id: 5, test: 'Vitamin D', justification: 'To measure vitamin D levels in the blood, important for bone health, immune function, and overall well-being.' },
    { id: 6, test: 'Comprehensive Metabolic Panel (CMP)', justification: 'To provide a broad assessment of organ function and check for conditions like diabetes, liver disease, and kidney disease.' },
    { id: 7, test: 'Hemoglobin A1c', justification: 'To measure average blood sugar levels over the past 2-3 months, used to diagnose and monitor diabetes.' },
    { id: 8, test: 'Vitamin B12', justification: 'To measure vitamin B12 levels, important for nerve function and red blood cell production.' },
    { id: 9, test: 'Folate', justification: 'To measure folate levels, important for cell growth and development.' },
    { id: 10, test: 'Iron Panel', justification: 'To assess iron levels in the blood, helping diagnose iron deficiency or overload.' },
    { id: 11, test: 'Magnesium', justification: 'To measure magnesium levels, important for muscle and nerve function, blood sugar control, and blood pressure regulation.' },
    { id: 12, test: 'Phosphorus', justification: 'To measure phosphorus levels, important for bone health and energy production.' },
    { id: 13, test: 'Calcium', justification: 'To measure calcium levels, important for bone health, muscle function, and nerve transmission.' },
    { id: 14, test: 'Albumin', justification: 'To measure albumin levels, a protein in the blood that helps maintain fluid balance and transports various substances.' },
    { id: 15, test: 'Globulin', justification: 'To measure globulin levels, a group of proteins in the blood that play a role in immune function.' },
    { id: 16, test: 'Total Protein', justification: 'To measure the total amount of protein in the blood, providing information about nutritional status and organ function.' },
    { id: 17, test: 'Liver Panel', justification: 'To assess liver function and detect liver damage or disease.' },
    { id: 18, test: 'Kidney Panel', justification: 'To assess kidney function and detect kidney damage or disease.' },
    { id: 19, test: 'C-Reactive Protein (CRP)', justification: 'To measure inflammation levels in the body.' },
    { id: 20, test: 'Erythrocyte Sedimentation Rate (ESR)', justification: 'To measure inflammation levels in the body.' },
  ];

  return (
    <div className="test-recommendation-display">
      <h2>Recommended Tests</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((rec) => (
            <li key={rec.id} className="recommendation-item">
              <h3>{rec.test}</h3>
              <p>{rec.justification}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available at this time. Please upload your health reports for analysis.</p>
      )}
    </div>
  );
}

export default TestRecommendationDisplay;
