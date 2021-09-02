import React, { useState } from 'react';
import Board from './comoponents/Board';
import './styles/style.scss';
import { calculateWinner } from './helpers';

const app = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXPlaying, setIsXPlaying] = useState(false);
  const winner = calculateWinner(board);

  console.log(winner);
  const handleSquareClick = position => {
    if (board[position] || winner) return;

    setBoard(prev => {
      return prev.map((element, index) => {
        if (index === position) {
          return isXPlaying ? 'X' : 'O';
        }
        return element;
      });
    });
    setIsXPlaying(prev => !prev);
  };
  let message = winner
    ? `Winner is: ${winner}`
    : `${isXPlaying ? 'X' : 'O'}'s Turn`;

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default app;
