const getVehicleById = (id) => {
    // Replace with actual database query logic (e.g., SQL or mock data)
    return vehicles.find(vehicle => vehicle.id === parseInt(id));  // Assuming 'vehicles' is an array
  };
  