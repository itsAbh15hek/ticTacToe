import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is: ${winner}`}
      {!winner && !noMovesLeft && `${current.isXPlaying ? 'X' : 'O'}'s Turn`}
      {!winner && noMovesLeft && "It's a Draw"}
    </h2>
  );
};

export default StatusMessage;
