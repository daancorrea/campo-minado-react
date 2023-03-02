import { GridContainer } from "./styles";
import { Cell } from "../Cells";
import { useEffect, useState } from "react";

export const Grid = ({ bees, rows, cols }) => {
  const [grid, setGrid] = useState([]);

  // função responsável por criar a grade do jogo
  const createGrid = () => {
    const arr = [];
    
    //bloco de FOR para linhas e colunas que são responsaveis por criar 1 posição do array para cada LINHA
    //se nós queremos que tenha 10 linhas, esse bloco vai criar um array com 10 objetos

    for (let row = 0; row < rows; row++) {
      const currentRow = [];
      for (let col = 0; col < cols; col++) {
        currentRow.push({row, col, bee: false, display: false})    
      }
     arr.push(currentRow) 
    }

    let beesCounter = bees; 
    while( beesCounter > 0 ){
      let x = Math.floor(Math.random() * rows);
      let y = Math.floor(Math.random() * cols);
      if(!arr[x][y].bee){
        arr[x][y].bee = true
        beesCounter--;
      }
    }

    arr.forEach(row => {
      row.forEach(cell => {
        if (!cell.bee) {
          let nearBees = 0;

          for (let i = -1; i < 2; i++) {
            if (cell.row + i > -1 && cell.row + i < rows) {
              const range = i === 0 ? {start: -1, end: 2} :
                cell.row % 2 === 0 ? {start: 0, end: 2} :
                  {start: -1, end: 1};
              for (let l = range.start; l < range.end; l++) {
                if (cell.col + l > -1 && cell.col + l < cols) {
                  if (arr[cell.row + i][cell.col + l].bee) {
                    nearBees++;
                  }
                }
              }
            }
            arr[cell.row][cell.col].nearBees = nearBees;
          }
        }
      });
    })

    console.log(arr)
    setGrid(arr);
  }

  //createGrid()
  useEffect(() => {
    createGrid()  
  }, [bees])
  
  


  return (
    <GridContainer
        cols={cols}
        rows={rows}
      >
        {grid.length > 0 &&
          grid.map((row) => {
            return row.map((cell, index) => {
              return <Cell
                //gridSet={loading}
                // setGameOver={() => setGameOver(true)}
                // countRevealed={() => setRevealed(count => count + 1)}
                // countFlags={(type) => countFlags(type)}
                // countMinesFlagged={(type) => countMinesFlagged(type)}
                // gameOver={gameOver}
                 cell={cell}
                // victory={victory}
                 key={index}
                // getEmptyCells={(cell) => getEmptyCells(cell)}
              />
            })
          })}
      </GridContainer>
  )
};
