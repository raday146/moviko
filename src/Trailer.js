import React from "react"
import ReactPlayer from "react-player"
// The component is not finished yet, and I'm  considering  if to use it or not

function Trailer() {
  return (
    <div>
      <ReactPlayer
        width="200px"
        url="https://www.youtube.com/watch?v=_WWEOCQGxSw"
      />
    </div>
  )
}
export default Trailer;