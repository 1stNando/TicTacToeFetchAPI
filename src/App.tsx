import React, { useState } from 'react'

export function App() {
  // Make a state using data:
  const [game, setGame] = useState({
    board: [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    id: null,
    winner: null,
  })

  // Start with defining a method to HANDLE clicking a cell.
  function handleClickCell(row: number, column: number) {
    console.log(`You hace clicked on row ${row} and column ${column}`)
  }

  return (
    <div>
      <h1>
        Tic Tac Toe - <button>New</button>
      </h1>
      <ul>
        <li onClick={() => handleClickCell(0, 0)}>{game.board[0][0]}</li>
        <li onClick={() => handleClickCell(0, 1)}>{game.board[0][1]}</li>
        <li onClick={() => handleClickCell(0, 2)}>{game.board[0][2]}</li>
        <li onClick={() => handleClickCell(1, 0)}>{game.board[1][0]}</li>
        <li onClick={() => handleClickCell(1, 1)}>{game.board[1][1]}</li>
        <li onClick={() => handleClickCell(1, 2)}>{game.board[1][2]}</li>
        <li onClick={() => handleClickCell(2, 0)}>{game.board[2][0]}</li>
        <li onClick={() => handleClickCell(2, 1)}>{game.board[2][1]}</li>
        <li onClick={() => handleClickCell(2, 2)}>{game.board[2][2]}</li>
      </ul>
    </div>
  )
}
