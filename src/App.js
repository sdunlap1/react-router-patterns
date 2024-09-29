import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';
import './App.css';

function App() {
  // Store color objects with name and value
  const [colors, setColors] = useState([
    { name: "red", value: "#ff0000" },
    { name: "green", value: "#00ff00" },
    { name: "blue", value: "#0000ff" }
  ]);

  const addColor = (newColor) => {
    setColors(prevColors => [...prevColors, newColor]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route to list all colors */}
          <Route path="/colors" element={<ColorList colors={colors} />} />
          
          {/* Route to show a single color */}
          <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
          
          {/* Route for adding a new color */}
          <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />

          {/* Redirect invalid routes to /colors */}
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;