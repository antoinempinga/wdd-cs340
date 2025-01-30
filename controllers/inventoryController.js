const { getVehicleById } = require('../models/inventoryModel');

const getVehicleDetail = async (req, res) => {
  const vehicleId = req.params.id;
  try {
    const vehicle = await getVehicleById(vehicleId);
    res.render('inventory/vehicleDetail', { vehicle });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
