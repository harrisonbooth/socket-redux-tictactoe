import React from "react"
import PropTypes from "prop-types"
import Tile from "./Tile"

const Board = ({ board, player, onTileClick, winner, playerType, socket, room }) => {
  let tilesInRow = [];
  const rows = board.map((tile, index) => {
    tilesInRow.push(
      <Tile 
        tile={tile} 
        key={index} 
        onClick={() => {
          onTileClick(tile, index, player, winner, playerType, socket, room)
        }} 
      />
    );
    
    if((index+1)%3 !== 0) return null;

    const subArray = tilesInRow;
    tilesInRow = [];

    return (
      <div key={`row-${index/3}`} className="tile-row">
        {subArray}
      </div>
    );
  });

  return (
    <div id="game-board">
      {rows}
    </div>
  );
}

Board.PropTypes = {
  board: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  onTileClick: PropTypes.func.isRequired,
  player: PropTypes.string.isRequired,
  winner: PropTypes.string,
  room: PropTypes.string
}

export default Board