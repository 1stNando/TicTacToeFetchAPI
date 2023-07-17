import React, { useState } from 'react'

export function App() {
  // Make a STATE using data:
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

  // Define a function to handle a new game fetch from API
  async function handleNewGame() {
    // Make a POST request to ask for a new game
    const response = await fetch(
      'https://sdg-tic-tac-toe-api.herokuapp.com/game',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )

    if (response.ok) {
      // Get the response as JSON
      const newGame = await response.json()

      // Make that the new STATE!
      setGame(newGame)
    }
  }

  // Next, we need to "Create a new game" to get a "Game ID" so that we can register moves.
  // Create function to handleNewGame that uses the game API. New Game needs to be a POST.
  async function handleNewGame() {
    const response = await fetch(
      'https://sdg-tic-tac-toe-api.herokuapp.com/game',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )

    if (response.ok) {
      // Get the response as JSON
      const newGame = await response.json()

      // Make that the new STATE!
      setGame(newGame)
    }
  }

  return (
    <div>
      <h1>
        Tic Tac Toe - <button onClick={handleNewGame}>New</button>
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
