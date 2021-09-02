import React, { useState } from 'react';
import Board from './comoponents/Board';
import './styles/style.scss';
import { calculateWinner } from './helpers';
import History from './comoponents/History';

const app = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXPlaying: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is: ${winner}`
    : `${current.isXPlaying ? 'X' : 'O'}'s Turn`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) return;

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((element, index) => {
        if (index === position) {
          return last.isXPlaying ? 'X' : 'O';
        }
        return element;
      });
      return prev.concat({ board: newBoard, isXPlaying: !last.isXPlaying });
    });
    setCurrentMove(prev => prev + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default app;
