import * as React from 'react'
import reactable from "reactablejs"
import Demo from "./Demo"

const Reactable = reactable(Demo)

export const BasicDemo = () => {
  const [coordinate, setCoordinate] = React.useState({ x: 0, y: 0 })
  return (
    <Reactable
      draggable
      onDragMove={(event: { dx: any; dy: any }) => {
        const { dx, dy } = event
        setCoordinate(prev => ({
          x: prev.x + dx,
          y: prev.y + dy
        }))
      }}
      x={coordinate.x}
      y={coordinate.y}
    />
  )
}
