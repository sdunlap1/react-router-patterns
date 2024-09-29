import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <h2>Dog not found!</h2>;

  return (
    <div className="dog-details">
      <img src={`/${dog.src}.jpg`} alt={dog.name} style={{ width: "450px", height: "450px"}} />
      <h2>{dog.name}</h2>
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Go Back</Link>
    </div>
  );
}

export default DogDetails;
