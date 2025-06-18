import React from 'react';
import FacilitySearchForm from '../components/FacilitySearchForm';

function FacilitySearch() {
  return (
    <div className="facility-search-page">
      <h1>Smart Facility Search</h1>
      <p>Find nearby affordable labs and clinics.</p>
      <FacilitySearchForm />
    </div>
  );
}

export default FacilitySearch;
