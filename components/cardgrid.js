import React from 'react';
import Card from './card';

const CardGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        cards &&
        cards?.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;