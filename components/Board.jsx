import { Square } from './Square'
import React, { useEffect, useState } from 'react'
import { TicTacToeUtils } from './Tic_Tac_Toe_Utils';
import Tilt from 'react-parallax-tilt';

export const Board = ({ restartGame = () => {}, handleBoardHistory = () => {}, boardHistory = [], historyIndex = 0}) =>  
{

  const [board, setBoard] = useState(boardHistory[historyIndex]);
  const [status, setStatus] = useState('X');

  useEffect(() => {

    const newBoard = JSON.parse(JSON.stringify(boardHistory[historyIndex]));

    setBoard(newBoard);
  }, [historyIndex])


useEffect(() => {

  const result = new TicTacToeUtils().calculate_winner(boardHistory[boardHistory.length -1]);

  if(result === 1) 
  {
    alert("Player \"X\" is the winner");
    restartGame()
  }
  
  if(result === 0) 
  {
    alert("Player \"O\" is the winner");
    restartGame()
  }

},[boardHistory])


  const handleBoardSquare = ({rIndex, cIndex, value}) => {
    if((boardHistory.length -1 === historyIndex) || boardHistory.length === 1)
    {
      const newBoard = JSON.parse(JSON.stringify(board));

      if(newBoard[rIndex][cIndex] === "")
      {
        newBoard[rIndex][cIndex] = value;

        setBoard(newBoard);
        setStatus((status) => status === "X" ? "O" : "X");

        handleBoardHistory(newBoard);
      }
    }
  }

  return (
    <div>
      
     <Tilt>

      <div className='board-status'>Player: {status} </div>

        <div className='rows-container'>

          <div className='board-row'>

              <Square value={board[0][0]} callback={() => handleBoardSquare({rIndex: 0, cIndex: 0, value: status})}/>
              <Square value={board[0][1]} callback={() => handleBoardSquare({rIndex: 0, cIndex: 1, value: status})}/>
              <Square value={board[0][2]} callback={() => handleBoardSquare({rIndex: 0, cIndex: 2, value: status})}/>


          </div>
          <div className='board-row'>

              <Square value={board[1][0]} callback={() => handleBoardSquare({rIndex: 1, cIndex: 0, value: status})}/>
              <Square value={board[1][1]} callback={() => handleBoardSquare({rIndex: 1, cIndex: 1, value: status})}/>
              <Square value={board[1][2]} callback={() => handleBoardSquare({rIndex: 1, cIndex: 2, value: status})}/>


          </div>
          <div className='board-row'>

              <Square value={board[2][0]} callback={() => handleBoardSquare({rIndex: 2, cIndex: 0, value: status})}/>
              <Square value={board[2][1]} callback={() => handleBoardSquare({rIndex: 2, cIndex: 1, value: status})}/>
              <Square value={board[2][2]} callback={() => handleBoardSquare({rIndex: 2, cIndex: 2, value: status})}/>


          </div>

        </div>

      </Tilt>

    </div>
  )
}
