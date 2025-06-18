# Facility Search Enhancement Plan

## Goal

Enhance the facility search feature to display facility details with a placeholder API and map integration, and with more filtering options.

## Plan

1.  **Modify the `FacilitySearchForm` component:**
    *   Add state variables for the new filtering options, such as services offered, insurance accepted, and languages spoken.
    *   Update the filter options section to include input fields or select boxes for the new filtering options.
    *   Modify the `handleSearch` function to filter the search results based on the new filtering options. Since I'm using dummy results, I will implement the filtering logic in the `handleSearch` function.
    *   Add a state variable to store the selected facility.
    *   Update the search results to include a button or link to "View Details" for each facility.
    *   When the "View Details" button is clicked, call a placeholder function `fetchFacilityDetails(facilityId)` to simulate fetching the facility details from an API.
    *   Inside the `fetchFacilityDetails` function, simulate an API call by returning a promise that resolves with dummy facility details based on the `facilityId`. The dummy facility details should include latitude and longitude coordinates.
    *   Update the selected facility state with the data received from the `fetchFacilityDetails` function.
    *   Add a conditional rendering section to display the details of the selected facility. This section should include information such as hours of operation, contact information, a description of services offered, and a map displaying the facility's location.
    *   Use a library like Google Maps or Leaflet to display the map. Since I don't have access to the internet, I will use a placeholder map component that displays a static image of a map with a marker at the facility's location.
2.  **Update the dummy results:**
    *   Add more detailed information to the dummy facility objects, such as hours of operation, contact information, a description of services offered, latitude and longitude coordinates, services offered, insurance accepted, and languages spoken.