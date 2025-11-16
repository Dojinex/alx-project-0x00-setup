import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`transition duration-300 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
