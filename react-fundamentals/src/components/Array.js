import React from 'react';

const Array = () => {
  let MyArray = [1, 2, 3, 4, 'sandip'];
  let MyObject = { name: 'sandip', surname: 'deshmukh', Education: 'BE' };
  return (
    <div>
      <h2>Array</h2>
      <h2>{MyArray[0]}</h2>
      <h2>{MyArray[2]}</h2>
      <h2>{MyArray[4]}</h2>
      <h2>{MyObject.name}</h2>
      <h2>{MyObject.surname}</h2>
      <h2>{MyObject.Education}</h2>
    </div>
  );
};

export default Array;
