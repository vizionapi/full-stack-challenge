import axios from "axios";

// Fetch all shipments
export async function getShipments() {
    try {
        const res = await axios.get("/api/shipments");
        return res.data;
    } catch (err) {
        console.error("Fetching shipments from API failed!");
        throw err;
    }
}