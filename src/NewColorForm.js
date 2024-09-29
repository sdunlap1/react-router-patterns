import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ addColor }) {
  const [colorName, setColorName] = useState("");  // Color name from the text input
  const [colorValue, setColorValue] = useState("#000000");  // Color value from the color picker
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (colorName) {
      addColor({ name: colorName, value: colorValue });  // Pass both name and color value
      navigate('/colors');  // Redirect back to color list
    } else {
      alert("Please enter a color name.");
    }
  };

  return (
    <div>
      <h1>Add a New Color</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorName">Color Name: </label>
        <input
          id="colorName"
          type="text"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
        />

        <label htmlFor="colorValue">Pick a Color: </label>
        <input
          id="colorValue"
          type="color"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
        
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
