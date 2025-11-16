import React from "react";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome to Landing Page</h1>
      
      <div className="flex gap-4 mt-6">
        <Button title="Small Button" styles="text-sm rounded-sm" />
        <Button title="Medium Button" styles="text-base rounded-md" />
        <Button title="Large Button" styles="text-lg rounded-full" />
      </div>
    </div>
  );
};

export default Landing;

