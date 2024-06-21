import { useState } from "react";

export default function GameBoard({ onSelectedSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameboard);

  //   function handleSquareSelection(rowIndex, colIndex) {
  //     setGameBoard((previousGameboard) => {
  //       const updatedBoard = [
  //         ...previousGameboard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedSquare(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
