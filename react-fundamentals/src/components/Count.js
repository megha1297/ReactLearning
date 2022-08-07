import React, { useState } from 'react';

const Count = () => {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <h2>Count App</h2>
      <h2>Count : {Count}</h2>
      <button onClick={() => setCount(Count + 1)}>add</button>
      <button onClick={() => setCount(Count - 1)}>sub</button>
    </div>
  );
};

export default Count;
