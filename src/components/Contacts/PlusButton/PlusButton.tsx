import React from "react";

import { PlusCircle } from "react-bootstrap-icons";

interface IPlusButton {
  size: string;
}

const PlusButton: React.FC<IPlusButton> = ({ size }) => (
  <PlusCircle
    size={size}
    style={{
      backgroundColor: "#0ba391",
      borderRadius: "15px",
      cursor: "pointer",
      borderColor: "#0ba391",
    }}
  />
);

export default PlusButton;
