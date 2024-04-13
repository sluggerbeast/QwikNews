import React, { useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

function Swipeable({onSideBarToggle}) {

    const { ref: documentRef } = useSwipeable({
        
        onSwipedLeft:()=>{
            console.log("inside right");
            onSideBarToggle(false) 
            // Swiping right show set the state of sideBar false it means
            // the side bar is opened and it will close
            // opposite for right swipe
        },
        onSwipedRight: () => {
            console.log("inside left");
            onSideBarToggle(true)
        },
        preventDefaultTouchmoveEvent: true,
        swipeDuration: 250,
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

