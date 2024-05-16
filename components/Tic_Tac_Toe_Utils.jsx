import React from 'react';
import { WINNER_CASES } from '../data/tic-tac-toe-board'

export class TicTacToeUtils 
{
  calculate_winner(board)
  {
    let winner = -1

    for(let Xcase of WINNER_CASES)
    {
      let result = "";

      for(let [rIndex, cIndex] of Xcase) 
      {
        if(board[rIndex][cIndex] === "") continue
        
          result += board[rIndex][cIndex];
      }
      
      if(result  === "XXX") 
      {
        winner = 1;
      }
      
      if(result === "OOO") 
      {
        winner = 0;
      }
    }
    return winner;
  }
}