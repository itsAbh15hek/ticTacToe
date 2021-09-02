import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              key={move}
              type="button"
              onClick={() => moveTo(move)}
            >
              {move === 0 ? 'Go to game start' : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
