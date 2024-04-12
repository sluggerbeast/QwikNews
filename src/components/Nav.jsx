import React, { useState } from 'react'

function Nav({onTaskBarToggle,onSideBarToggle}) {
  const [isOntop, setIsOnTop] = useState(false)
  const [isSideBar,  setIsSideBar] = useState(false)
    let showTaskBar = true;
    function handleTaskBarToggle(){
      setIsSideBar(prev=>!prev); 
      onSideBarToggle(isSideBar)
    }
    function handleScrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  return (
    <div
        style={{ display: onTaskBarToggle ? "block" : "none" }}
        className="text-center p-3 bg-slate-100  fixed w-full mb-2 shadow z-30"
      >
        <ul className="flex justify-between sm:justify-center sm:gap-[4rem]">
          <li className="text-blue-500 " onClick={handleTaskBarToggle}><i class="fa <i fa-sharp fa-light fa-filter fa-lg"></i></li>
          <li className="text-[1.1rem] font-normal">QwikNews</li>
          <li>
            {isOntop?<i class="fa fa-refresh text-blue-500 fa-lg" />:
            <i class="fa fa-arrow-up text-blue-500 fa-lg" onClick={handleScrollToTop}/>}
            
            

          </li>
        </ul>
      </div>
  )
}

export default Nav