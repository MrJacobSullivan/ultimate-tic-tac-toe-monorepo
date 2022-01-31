import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Play = () => {
  const navigate = useNavigate();
  const { topic } = useParams();

  return (
    <div>
      <h1>About Page</h1>
      <h2>{topic}</h2>

      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default Play;
