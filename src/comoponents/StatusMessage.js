import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>{' '}
          !!
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          <span className={current.isXPlaying ? 'text-green' : 'text-orange'}>
            {current.isXPlaying ? 'X' : 'O'}
          </span>{' '}
          is Playing !!
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> &{' '}
          <span className="text-orange">O</span> Tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
