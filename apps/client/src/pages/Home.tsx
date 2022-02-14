import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/play')}>Play</button>
      <button onClick={() => navigate('/practice')}>Practice</button>
      <button onClick={() => navigate('/learn')}>Learn</button>
    </div>
  );
};

export default Home;
