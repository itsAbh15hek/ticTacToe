import React from "react";
import Board from './comoponents/Board';
import './styles/root.scss'

const app=()=>{
  return  (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Board />
    </div>
  )
}

export default app;
