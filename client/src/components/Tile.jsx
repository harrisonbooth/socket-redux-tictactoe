import React from "react"
import PropTypes from "prop-types"

const Tile = ({ onClick, tile }) => (
  <div className={`tile ${tile}`} onClick={onClick}>
  </div>
)

Tile.propTypes = {
  onClick: PropTypes.func.isRequired,
  tile: PropTypes.string
}

export default Tile