import React, { useState } from 'react';
import Board from './comoponents/Board';
import './styles/style.scss';
import { calculateWinner } from './comoponents/helpers';
import History from './comoponents/History';
import StatusMessage from './comoponents/StatusMessage';

const NEW_GAME = [{ board: Array(9).fill(null), isXPlaying: false }];

const app = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const { winner, winningSquares } = calculateWinner(current.board);

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
  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start New Game
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default app;
