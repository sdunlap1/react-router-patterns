import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

function ColorDetails({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find(c => c.name.toLowerCase() === decodeURIComponent(color).toLowerCase());

  console.log("Selected Color:", selectedColor);  // Log the selected color object

  if (!selectedColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: selectedColor.value, height: '100vh' }}>
      <h1>This is {selectedColor.name}</h1>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default ColorDetails;
