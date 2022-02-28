import * as React from 'react';
import { useCreateGame } from '../hooks/useCreateGame';
import { useJoinGame } from '../hooks/useJoinGame';
import { useOpenGames } from '../hooks/useOpenGames';

const Learn = () => {
  const [handleCreateGame, error] = useCreateGame();
  const [handleJoinGame] = useJoinGame();
  const openGames = useOpenGames();

  const [value, setValue] = React.useState<string>('');

  return (
    <div>
      <p>learn</p>

      <div>
        {openGames?.map((openGame, i) => {
          return <p key={i}>{openGame}</p>;
        })}
      </div>

      <button onClick={() => handleCreateGame()}>Press</button>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleJoinGame(value)}>Join</button>
    </div>
  );
};

export default Learn;
