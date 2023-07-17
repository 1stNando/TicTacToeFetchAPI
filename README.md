Deployed URL: https://nandossmarttictactoe.netlify.app

A more complex example: Tic Tac Toe With an API

In React State, we saw how to use the useState hook to manage data that is changing in response to a user event. We built a simple component that counted the number of times we clicked on a button. Managing this kind of data is known as local state. The other type of state is remote state or remote data or server state. Let's extend our knowledge of state by interacting with a remote API.

The API we'll be using for this example is an unbeatable Tic Tac Toe API. Read the API to get familiar with how it works. You'll notice that there are three main endpoints:

    Create a new game

    Make a move in a game

    Get the state of a game

We'll be using those API endpoints during this example.
Revisiting our dynamic application workflow

For this implementation, we'll again revisit our five phases of building a dynamic app.

    Static Implementation
    Make a state object containing data
    Try manually changing the value in the state
    Connect actions (later on, we'll add API interaction here)
    Update state

Step 1 - Static Implementation

We'll begin by designing our Tic Tac Toe game with basic JSX.

Step 2: Make a state using data

When we are using an API, we want to use a state with the same "shape" (structure) as the API uses. Looking at the API response of a new game, we'll see it generates data like this:

{
"winner": "X",
"id": 42,
"board": [
[" ", " ", " "],
[" ", " ", " "],
[" ", " ", " "]
]
}

Step 3 - Try manually changing the state

Now try replacing a few of the empty strings with some X and O values that you might see in a real game of Tic Tac Toe.

We should see the game board render with the appropriate values in the squares!

Step 4 - Connect the actions

We will begin by defining a method that will handle clicking on a cell.

In this case, we'll need to know the row and column of the cell.

Step 5 - Update the state

For this, we will use the Tic Tac Toe API. Reading the API, it appears we need to "Create a new game" to get a "Game ID" so that we can register moves.
