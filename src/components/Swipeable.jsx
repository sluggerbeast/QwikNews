import React, { useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

function Swipeable({onSideBarToggle}) {

    const { ref: documentRef } = useSwipeable({
        onSwiped: ({ dir, event }) => {
          console.log("swiped"+dir)
        },
        onSwipedLeft:()=>{
            console.log("inside right");
            onSideBarToggle(true)
        },
        onSwipedRight: () => {
            console.log("inside left");
            onSideBarToggle(false)
        },
        preventDefaultTouchmoveEvent: true
      });
      useEffect(() => {
        documentRef(document);
        // Clean up swipeable event listeners
        return () => documentRef({});
      });
  return (
    <></>
  )
}

export default Swipeable

