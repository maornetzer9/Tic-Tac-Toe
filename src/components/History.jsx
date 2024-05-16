import React from 'react'
import Tilt from 'react-parallax-tilt';


export const History = ({boardHistory = [] , handleHistoryIndex = () => {}, restartGame = () => {} }) => 
{
  return (
     <div className="history-list">
          <Tilt>
              {boardHistory.map((history, index) => {
                return (
                   <li key={index} onClick={() => handleHistoryIndex(index)} className="history-record">
                     {
                       index === 0
                       ? <p>Go To Start Game</p>
                       : <p>Go To Move #{index}</p>
                     }
                   </li>
                  )
              })}
            <button className='history-record' onClick={restartGame}> Restart Game </button>
          </Tilt>
      </div>
  )
}
