import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({ dogs }) {
  return (
    <nav>
      <NavLink className="nav-link" to="/dogs">Home</NavLink>
      {dogs.map(dog => (
        <NavLink className="nav-link" key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
