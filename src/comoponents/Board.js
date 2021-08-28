import React,{useState} from 'react'
import Square from './Square'


const Board = () => {
  const [board,setBoard]=useState(Array(9).fill(null));

  const [isXPlaying,setIsXPlaying]=useState(false)

  const handleSquareClick=(position)=>{
    if(board[position])
    return;
    
    setBoard((prev)=>{
      return prev.map((element,index)=>{
        
        if(index===position){
          return isXPlaying?"X":"O"

        }
        return element
        
      })
      
    });
    setIsXPlaying((prev)=>!prev)
  }

  const renderSquare=(position)=>{
    return(
      <Square value={board[position]} 
      onClick={()=>handleSquareClick(position)}/>
    )
  }
  
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
  )
}

export default Board
