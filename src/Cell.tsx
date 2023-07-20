import React from 'react'
import { CellProps } from './App'

export function Cell(props: CellProps) {
  const { cell, rowIndex, columnIndex, recordMove } = props
  function handleClickCell() {
    console.log(`You clicked on ${rowIndex} - ${columnIndex}`)

    // Here we can use the new props.recordMove. We call the parent recordMove. Using props to pass DOWN state values.
    recordMove(rowIndex, columnIndex)
  }
  return (
    <button className={cell === ' ' ? '' : 'taken'} onClick={handleClickCell}>
      {cell}
    </button>
  )
}
