import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Play = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>

      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default Play;
