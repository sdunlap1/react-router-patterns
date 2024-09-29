import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
  return (
    <div>
      <h1>Available Colors</h1>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            {/* Pass color name (not the whole object) in the Link */}
            <Link to={`/colors/${encodeURIComponent(color.name)}`}>
              {color.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a New Color</Link>
    </div>
  );
}

export default ColorList;
