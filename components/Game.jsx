import React, { useState } from 'react';
import { Board } from './Board';
import { TIC_TAC_TOE_BOARD } from '../data/tic-tac-toe-board';
import { History } from './History';

export const Game = ()  =>
{
const [boardHistory,setBoardHistory] = useState([TIC_TAC_TOE_BOARD]);
const [historyIndex, setHistoryIndex] = useState (0);


const handleHistoryIndex = (index) => setHistoryIndex(index);

const restartGame = () => {

  setHistoryIndex(0);
  setBoardHistory([TIC_TAC_TOE_BOARD])
}

const handleBoardHistory = (board) => {
  const newBoardHistory = board;

  setBoardHistory([...boardHistory, newBoardHistory])
  setHistoryIndex(historyIndex + 1)
}

  return (
    <div className='game-board'>
      
      <Board restartGame={restartGame} boardHistory={boardHistory} historyIndex={historyIndex} handleBoardHistory={handleBoardHistory} />
      <History boardHistory={boardHistory} handleHistoryIndex={handleHistoryIndex}/>

    </div>
  )
}
