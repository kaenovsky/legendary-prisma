// src/components/Card.js
import React from "react";

const Card = ({ name, height, mass, homeworld, gender,cybernetics, image }) => {
  return (
    <div className="bg-white p-5 shadow-md">
      <img
        src={image}
        alt={name}
        className="mb-2 w-full h-[250px] object-contain object-center"
      />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Gender: {gender}</p>
      <p>Cybernetics: {cybernetics}</p>
    </div>
  );
};

export default Card;
