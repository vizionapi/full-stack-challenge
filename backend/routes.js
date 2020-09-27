const express = require("express");
const router = new express.Router();
const { Shipment } = require('./models');

// Your API endpoints should be implemented here

router.get("/shipments", async (req, res) => {
    const shipments = await Shipment.findAll();
    res.json(shipments);
});

module.exports = router;