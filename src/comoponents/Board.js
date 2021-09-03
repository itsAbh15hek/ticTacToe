import React from 'react';
import Square from './Square';

const Board = ({ board, handleSquareClick, winningSquares }) => {
  const renderSquare = position => {
    const isWinningSquare = winningSquares.includes(position);
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="boardRow">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="boardRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="boardRow">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
