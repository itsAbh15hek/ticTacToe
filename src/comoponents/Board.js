import React from 'react'
import Square from './Square'

const Board = () => {
  return (
    <div className="board">
      <divc className="boardRow"> 
        <Square value={0}/>
        <Square value={1}/>
        <Square value={2}/>
      </divc>
      <div className="boardRow"> 
        <Square value={3}/>
        <Square value={4}/>
        <Square value={5}/>
      </div>
      <div className="boardRow"> 
        <Square value={6}/>
        <Square value={7}/>
        <Square value={8}/>
      </div>
      
     
    </div>
  )
}

export default Board
