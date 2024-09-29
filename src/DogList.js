import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet Our Dogs!</h1>
      <div>
        {dogs.map((dog) => (
          <div key={dog.name}>
            <img src={`/${dog.src}.jpg`} alt={dog.name} style={{ width: "500px", height: "500px"}} />
            <h2>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
