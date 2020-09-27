
const { Shipment } = require("../backend/models");

const seeds = [
  {
    containerId: "TGHU9127781",
    carrierScac: "MAEU",
  },
  {
    containerId: "APHU7369949",
    carrierScac: "CMDU",
  },
];

(async () => {
  await Shipment.sync({ force: true });
  await Promise.all(
    seeds.map(async (data) => {
      const shipment = await Shipment.create(data)
      console.log(`Created shipment with ID ${shipment.id}`);
    })
  );
  console.log("Database seeded successfully.");
})();
