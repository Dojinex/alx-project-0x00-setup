import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome to Landing Page</h1>

      {/* Buttons under heading */}
      <div className="flex gap-4 mt-6">
        <Button title="Small Button" styles="text-sm rounded-sm bg-blue-500 text-white px-3 py-1" />
        <Button title="Medium Button" styles="text-base rounded-md bg-green-500 text-white px-4 py-2" />
        <Button title="Large Button" styles="text-lg rounded-full bg-red-500 text-white px-6 py-3" />
      </div>

      {/* Card component */}
      <div className="mt-10">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Landing;

