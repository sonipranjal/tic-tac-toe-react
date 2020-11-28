import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon animate__heartBeat" />;
    case "cross":
      return <FaTimes className="icon animate__heartBeat" />;
    default:
      return <FaPen className="icon animate__heartBeat" />;
  }
};

export default Icon;
