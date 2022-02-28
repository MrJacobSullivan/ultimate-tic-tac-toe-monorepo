import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateGame } from '../hooks/useCreateGame';
import { useJoinGame } from '../hooks/useJoinGame';

const Play = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState<string>('');

  const [createGame, createdGameId, createError] = useCreateGame();
  const [joinGame, joinError] = useJoinGame();

  React.useEffect(() => {
    if (createdGameId) navigate('/play/' + createdGameId);
  }, [navigate, createdGameId]);

  const handleCreateGame = () => {
    createGame();
  };
  const handleJoinGame = () => {
    joinGame(value);
  };

  return (
    <div>
      <button onClick={handleCreateGame}>Create Game</button>

      <label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button onClick={handleJoinGame}>Join Game</button>
    </div>
  );
};

export default Play;
