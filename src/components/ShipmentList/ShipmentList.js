import React from "react";
import PropTypes from "prop-types";
import "./ShipmentList.css";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString();
}

function ShipmentListItem({
  shipment: { carrierScac, containerId, createdAt },
}) {
  return (
    <li className="ShipmentListItem">
      <p className="ShipmentListItem-title">
        {carrierScac} / {containerId}
      </p>
      <p>Created {formatDate(createdAt)}</p>
    </li>
  );
}

const ShipmentPropType = PropTypes.shape({
  id: PropTypes.string,
  containerId: PropTypes.string,
  carrierScac: PropTypes.string,
  isActive: PropTypes.bool,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
});

ShipmentListItem.propTypes = {
  shipment: ShipmentPropType
}

function ShipmentList({ shipments, onRefreshClick }) {
  return (
    <>
      <h1>Current Shipments</h1>
      <ul className="ShipmentList">
        {shipments.map((shipment) => (
          <ShipmentListItem
            key={`shipment-${shipment.id}`}
            shipment={shipment}
          />
        ))}
      </ul>
      <button onClick={() => onRefreshClick()}>Refresh List</button>
    </>
  );
}

ShipmentList.propTypes = {
  shipments: PropTypes.arrayOf(ShipmentPropType),
  onRefreshClick: PropTypes.func
};

export default ShipmentList;
