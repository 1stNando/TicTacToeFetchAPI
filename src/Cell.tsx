import React from 'react'
import { CellProps } from './App'

export function Cell(props: CellProps) {
  function handleClickCell() {
    console.log(`You clicked on ${props.rowIndex} - ${props.columnIndex}`)

    // Here we can use the new props.recordMove. We call the parent recordMove. Using props to pass DOWN state values.
    props.recordMove(props.rowIndex, props.columnIndex)
  }
  return (
    <button
      key={props.columnIndex}
      className={props.cell === ' ' ? '' : 'taken'}
      onClick={handleClickCell}
    >
      {props.cell}
    </button>
  )
}
