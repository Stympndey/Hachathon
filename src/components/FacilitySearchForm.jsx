import React, { useState, useEffect } from 'react';

function FacilitySearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [insurancePlan, setInsurancePlan] = useState({
    deductible: 5000,
    coinsurance: 0.2,
    outOfPocketMax: 10000
  });
  const [filterOptions, setFilterOptions] = useState({
    costRange: [0, 10000],
    quality: '',
    distance: '',
    servicesOffered: '',
    insuranceAccepted: '',
    languagesSpoken: ''
  });
  const [results, setResults] = useState([]);

  const calculateOutOfPocketCost = (price, insurance) => {
    if (price <= insurance.deductible) {
      return price;
    }
    const coinsuranceAmount = (price - insurance.deductible) * insurance.coinsurance;
    const totalCost = insurance.deductible + coinsuranceAmount;
    return Math.min(totalCost, insurance.outOfPocketMax);
  };
  const [message, setMessage] = useState('');
  const [savedFacilities, setSavedFacilities] = useState({});
  const [selectedFacility, setSelectedFacility] = useState(null);

  useEffect(() => {
    const storedFacilities = localStorage.getItem('savedFacilities');
    if (storedFacilities) {
      try {
        setSavedFacilities(JSON.parse(storedFacilities));
      } catch (error) {
        console.error("Error parsing saved facilities from local storage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedFacilities', JSON.stringify(savedFacilities));
  }, [savedFacilities]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
  };

  const handleSearch = () => {
    setMessage('Searching for facilities... (Results below)');
    const dummyResults = [
      {
        id: 1,
        name: 'Gupta Diagnostics',
        address: '123 MG Road',
        rating: 4.5,
        pricing: {
          labTests: { cash: 500, insured: 300 },
          consultations: { cash: 800, insured: 500 },
          imaging: { cash: 1500, insured: 1200 }
        },
        distance: '2 km',
        servicesOffered: ['Lab Tests', 'Consultations'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Hindi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 2,
        name: 'Verma Health Clinic',
        address: '456 Linking Road',
        rating: 4.0,
        pricing: {
          consultations: { cash: 1000, insured: 700 },
          imaging: { cash: 2000, insured: 1500 }
        },
        distance: '5 km',
        servicesOffered: ['Consultations', 'Imaging'],
        insuranceAccepted: 'No',
        languagesSpoken: ['English'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 3,
        name: 'Sharma Medical Center',
        address: '789 SV Road',
        rating: 3.8,
        pricing: {
          labTests: { cash: 400, insured: 250 }
        },
        distance: '1 km',
        servicesOffered: ['Lab Tests'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Marathi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 4,
        name: 'Khan Health Center',
        address: '101 Hill Road',
        rating: 4.2,
        pricing: {
          labTests: { cash: 600, insured: 400 },
          consultations: { cash: 900, insured: 600 },
          imaging: { cash: 1800, insured: 1500 }
        },
        distance: '3 km',
        servicesOffered: ['Lab Tests', 'Consultations', 'Imaging'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Urdu'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 5,
        name: 'Reddy Medical Group',
        address: '222 Park Street',
        rating: 3.5,
        pricing: {
          consultations: { cash: 1200, insured: 800 }
        },
        distance: '7 km',
        servicesOffered: ['Consultations'],
        insuranceAccepted: 'No',
        languagesSpoken: ['English'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 6,
        name: 'Patel Diagnostic Center',
        address: '333 Main Road',
        rating: 4.8,
        pricing: {
          labTests: { cash: 700, insured: 450 },
          consultations: { cash: 1100, insured: 750 }
        },
        distance: '4 km',
        servicesOffered: ['Lab Tests', 'Consultations'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Gujarati'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 7,
        name: 'Jain Health Services',
        address: '444 Station Road',
        rating: 4.1,
        pricing: {
          imaging: { cash: 2200, insured: 1800 }
        },
        distance: '6 km',
        servicesOffered: ['Imaging'],
        insuranceAccepted: 'No',
        languagesSpoken: ['English', 'Hindi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 8,
        name: 'Singh Medical',
        address: '555 Market Street',
        rating: 4.6,
        pricing: {
          labTests: { cash: 550, insured: 350 },
          consultations: { cash: 900, insured: 600 }
        },
        distance: '3.5 km',
        servicesOffered: ['Lab Tests', 'Consultations'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Punjabi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 9,
        name: 'Kumar Health Center',
        address: '666 Broadway',
        rating: 4.3,
        pricing: {
          consultations: { cash: 1300, insured: 900 }
        },
        distance: '8 km',
        servicesOffered: ['Consultations'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Tamil'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 10,
        name: 'Rao Diagnostic',
        address: '777 Park Avenue',
        rating: 4.4,
        pricing: {
          labTests: { cash: 450, insured: 300 }
        },
        distance: '2.5 km',
        servicesOffered: ['Lab Tests'],
        insuranceAccepted: 'No',
        languagesSpoken: ['English', 'Telugu'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 11,
        name: 'Shah Health Clinic',
        address: '888 Broadway',
        rating: 4.7,
        pricing: {
          consultations: { cash: 1000, insured: 700 }
        },
        distance: '4.2 km',
        servicesOffered: ['Consultations'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Hindi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 12,
        name: 'Mehta Diagnostic Center',
        address: '999 Main Street',
        rating: 4.9,
        pricing: {
          labTests: { cash: 600, insured: 400 }
        },
        distance: '1.8 km',
        servicesOffered: ['Lab Tests'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Gujarati'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 13,
        name: 'Desai Health Services',
        address: '1010 Market Street',
        rating: 4.3,
        pricing: {
          imaging: { cash: 2000, insured: 1600 }
        },
        distance: '5.5 km',
        servicesOffered: ['Imaging'],
        insuranceAccepted: 'No',
        languagesSpoken: ['English'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 14,
        name: 'Joshi Medical Group',
        address: '1111 Park Place',
        rating: 4.5,
        pricing: {
          consultations: { cash: 1200, insured: 800 }
        },
        distance: '3.8 km',
        servicesOffered: ['Consultations'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Marathi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 15,
        name: 'Gupta Health Care',
        address: '1212 Broadway',
        rating: 4.1,
        pricing: {
          labTests: { cash: 500, insured: 350 }
        },
        distance: '6 km',
        servicesOffered: ['Lab Tests'],
        insuranceAccepted: 'No',
        languagesSpoken: ['English', 'Hindi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 16,
        name: 'Sharma Health Clinic',
        address: '1313 Main Road',
        rating: 4.6,
        pricing: {
          consultations: { cash: 900, insured: 600 }
        },
        distance: '2.8 km',
        servicesOffered: ['Consultations'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Punjabi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 17,
        name: 'Verma Diagnostic Center',
        address: '1414 Station Road',
        rating: 4.8,
        pricing: {
          labTests: { cash: 700, insured: 450 }
        },
        distance: '4.5 km',
        servicesOffered: ['Lab Tests'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Hindi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 18,
        name: 'Kumar Health Services',
        address: '1515 Market Street',
        rating: 4.2,
        pricing: {
          imaging: { cash: 2100, insured: 1700 }
        },
        distance: '7 km',
        servicesOffered: ['Imaging'],
        insuranceAccepted: 'No',
        languagesSpoken: ['English'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 19,
        name: 'Singh Medical Center',
        address: '1616 Park Avenue',
        rating: 4.4,
        pricing: {
          consultations: { cash: 1100, insured: 750 }
        },
        distance: '3.2 km',
        servicesOffered: ['Consultations'],
        insuranceAccepted: 'Yes',
        languagesSpoken: ['English', 'Punjabi'],
        latitude: 34.0522,
        longitude: -118.2437
      },
      {
        id: 20,
        name: 'Reddy Health Clinic',
        address: '1717 Broadway',
        rating: 4.0,
        pricing: {
          labTests: { cash: 400, insured: 250 }
        },
        distance: '5 km',
        servicesOffered: ['Lab Tests'],
        insuranceAccepted: 'No',
        languagesSpoken: ['English', 'Telugu'],
        latitude: 34.0522,
        longitude: -118.2437
      }
    ];

    setResults(dummyResults);
  };

  const isFacilitySaved = (facilityId) => {
    return !!savedFacilities[facilityId];
  };

  const handleViewDetails = (facilityId) => {
    const facility = dummyResults.find(f => f.id === facilityId);
    setSelectedFacility(facility);
  };

  const handleSaveToggle = (facility) => {
    const facilityId = facility.id;
    setSavedFacilities(prev => ({
      ...prev,
      [facilityId]: !prev[facilityId]
    }));
  };

  return (
    <div className="container facility-search-container">
      <h2>Find Labs and Clinics</h2>
      <div className="search-input-group">
        <input
          type="text"
          placeholder="Search by name or specialty"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {selectedFacility && (
        <div className="insurance-estimator">
          <h3>Insurance Coverage Estimator</h3>
          <div className="insurance-inputs">
            <label>
              Deductible:
              <input
                type="number"
                value={insurancePlan.deductible}
                onChange={(e) => setInsurancePlan(prev => ({
                  ...prev,
                  deductible: parseFloat(e.target.value)
                }))}
              />
            </label>
            <label>
              Coinsurance (%):
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={insurancePlan.coinsurance * 100}
                onChange={(e) => setInsurancePlan(prev => ({
                  ...prev,
                  coinsurance: parseFloat(e.target.value) / 100
                }))}
              />
            </label>
            <label>
              Out-of-Pocket Max:
              <input
                type="number"
                value={insurancePlan.outOfPocketMax}
                onChange={(e) => setInsurancePlan(prev => ({
                  ...prev,
                  outOfPocketMax: parseFloat(e.target.value)
                }))}
              />
            </label>
          </div>
        </div>
      )}


      <div className="filter-options">
        <label>
          Cost Range:
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={filterOptions.costRange[0]}
            onChange={(e) => setFilterOptions(prev => ({
              ...prev,
              costRange: [e.target.value, prev.costRange[1]]
            }))}
          />
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={filterOptions.costRange[1]}
            onChange={(e) => setFilterOptions(prev => ({
              ...prev,
              costRange: [prev.costRange[0], e.target.value]
            }))}
          />
          <span>₹{filterOptions.costRange[0]} - ₹{filterOptions.costRange[1]}</span>
        </label>
        <label>
          Quality:
          <select name="quality" value={filterOptions.quality} onChange={handleFilterChange}>
            <option value="">Any</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
          </select>
        </label>
        <label>
          Distance:
          <select name="distance" value={filterOptions.distance} onChange={handleFilterChange}>
            <option value="">Any</option>
            <option value="5">Within 5 miles</option>
            <option value="10">Within 10 miles</option>
          </select>
        </label>
        <label>
          Services Offered:
          <select name="servicesOffered" value={filterOptions.servicesOffered} onChange={handleFilterChange}>
            <option value="">Any</option>
            <option value="Lab Tests">Lab Tests</option>
            <option value="Consultations">Consultations</option>
            <option value="Imaging">Imaging</option>
          </select>
        </label>
        <label>
          Insurance Accepted:
          <select name="insuranceAccepted" value={filterOptions.insuranceAccepted} onChange={handleFilterChange}>
            <option value="">Any</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Languages Spoken:
          <select name="languagesSpoken" value={filterOptions.languagesSpoken} onChange={handleFilterChange}>
            <option value="">Any</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </label>
      </div>

      {message && <p className="search-message">{message}</p>}

      <div className="search-results">
        <h3>Search Results</h3>
        {results.map((facility) => (
          <div key={facility.id} className="card facility-item">
            <h3>{facility.name}</h3>
            <p>Address: {facility.address}</p>
            <p>Rating: {facility.rating} stars</p>
            <p>Price Range: ₹{Math.min(...Object.values(facility.pricing).map(p => p.cash))} - ₹{Math.max(...Object.values(facility.pricing).map(p => p.cash))}</p>
            <p>Distance: {(parseFloat(facility.distance) * 0.621371).toFixed(1)} miles ({facility.distance})</p>
            <button className="button">Book Appointment</button>
            <button className="button" onClick={() => handleSaveToggle(facility)}>
              {isFacilitySaved(facility.id) ? "Unsave" : "Save"}
            </button>
            <button className="button" onClick={() => handleViewDetails(facility.id)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedFacility && (
        <div className="card facility-details">
          <h2>Facility Details</h2>
          <h3>{selectedFacility.name}</h3>
          <p>Address: {selectedFacility.address}</p>
          <p>Rating: {selectedFacility.rating} stars</p>
          <div className="price-comparison">
            <h4>Pricing Details</h4>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Cash Price</th>
                  <th>Insured Price</th>
                  <th>Your Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selectedFacility.pricing).map(([service, prices]) => (
                  <tr key={service}>
                    <td>{service}</td>
                    <td>₹{prices.cash}</td>
                    <td>₹{prices.insured}</td>
                    <td>₹{calculateOutOfPocketCost(prices.insured, insurancePlan)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Distance: {(parseFloat(selectedFacility.distance) * 0.621371).toFixed(1)} miles ({selectedFacility.distance})</p>
          <p>Map Placeholder</p>
          <p>Services Offered: {selectedFacility.servicesOffered?.join(", ") || "N/A"}</p>
          <p>Insurance Accepted: {selectedFacility.insuranceAccepted || "N/A"}</p>
          <p>Languages Spoken: {selectedFacility.languagesSpoken?.join(", ") || "N/A"}</p>
        </div>
      )}
    </div>
  );
}

export default FacilitySearchForm;
