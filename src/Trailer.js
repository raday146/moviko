import React from "react"
import ReactPlayer from "react-player"

// The component  is not finished yet, I'm still considering if should I use it or not.
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