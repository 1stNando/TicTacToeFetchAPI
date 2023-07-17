import React, { useState } from 'react'

export function App() {
  type Square = 'X' | 'O' | ' '
  type Row = [Square, Square, Square]
  type Board = [Row, Row, Row]
  // Last part: refine our TS, to define some types for the state to improve type checking.
  type Game = {
    board: Board
    id: null | number
    winner: null | string
  }

  // Make a STATE using data:
  const [game, setGame] = useState<Game>({
    board: [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    id: null,
    winner: null,
  })

  // Start with defining a method to HANDLE clicking a cell.
  async function handleClickCell(row: number, column: number) {
    // Add guard clause to block the click for each condition we want to prevent. Statement that checks for conditions under which we don't want the rest of the function to execute
    if (
      // No game id
      game.id === undefined ||
      // A winner exists
      game.winner ||
      // The space isn't blank
      game.board[row][column] !== ' '
    ) {
      return
    }

    //console.log(`You hace clicked on row ${row} and column ${column}`)

    // Part 3: When we click a cell, we need to build an API request to send to the server.
    // -Generate the URL we need in which we interpolate the value from game state.
    const url = `https://sdg-tic-tac-toe-api.herokuapp.com/game/${game.id}`

    // After the url, we make an object to send JSON
    const body = { row: row, column: column }

    // Make a POST request to make a move
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (response.ok) {
      // Get the response as JSON
      const newGame = (await response.json()) as Game

      // Make that the new state!
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
      // Get the response as JSON. Type: any at this point.
      const newGame = await response.json()

      // Make that the new STATE!
      setGame(newGame)
    }
  }

  // Ternary operator used to dynamically change the header when the state of winner changes.
  const header = game.winner
    ? `${game.winner} is the winner!`
    : 'Nandos Unbeatable AI Powered Tic Tac Toe'

  console.log('check!!')

  return (
    <div>
      <h1>
        {header} - <button onClick={handleNewGame}>New</button>
      </h1>
      <ul>
        {game.board.map((boardRow, rowIndex) => {
          return boardRow.map((cell, columnIndex) => {
            console.log(cell)

            return (
              <li
                key={columnIndex}
                className={cell === ' ' ? '' : 'taken'}
                onClick={() => handleClickCell(rowIndex, columnIndex)}
              >
                {cell}
              </li>
            )
          })
        })}
      </ul>
      {
        ////////////////////////////////////////////////////////////////////
        /* <li onClick={() => handleClickCell(0, 0)}>{game.board[0][0]}</li>
        <li onClick={() => handleClickCell(0, 1)}>{game.board[0][1]}</li>
        <li onClick={() => handleClickCell(0, 2)}>{game.board[0][2]}</li>
        <li onClick={() => handleClickCell(1, 0)}>{game.board[1][0]}</li>
        <li onClick={() => handleClickCell(1, 1)}>{game.board[1][1]}</li>
        <li onClick={() => handleClickCell(1, 2)}>{game.board[1][2]}</li>
        <li onClick={() => handleClickCell(2, 0)}>{game.board[2][0]}</li>
        <li onClick={() => handleClickCell(2, 1)}>{game.board[2][1]}</li>
        <li onClick={() => handleClickCell(2, 2)}>{game.board[2][2]}</li> */
      }
    </div>
  )
}
