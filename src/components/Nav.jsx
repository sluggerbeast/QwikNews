import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHippo,
  faRefresh,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

function Nav({
  onTaskBarToggle,
  onSideBarToggle,
  isSideBarOpen,
  currentFeedName,
}) {
  const [isOntop, setIsOnTop] = useState(true);

  function handleTaskBarToggle() {
    onSideBarToggle();
  }
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOnTop(true);
  }
  function handleRefresh() {
    document.location.reload();
  }
  useEffect(() => {
    window.onscroll = () =>
      window.scrollY < 300 ? setIsOnTop(true) : setIsOnTop(false);

    return () => (window.onscroll = null);
  }, []);
  return (
    <div
      style={{ display: onTaskBarToggle ? "block" : "block" }}
      className="text-center p-2 bg-slate-100 opacity-95  fixed w-full mb-2 shadow z-30"
    >
      <ul className="flex justify-between sm:justify-center sm:gap-[4rem]">
        <li className="text-blue-500 " onClick={handleTaskBarToggle}>
          <FontAwesomeIcon icon={faHippo} className="text-[30px]" />
        </li>
        <li className="text-[1.1rem] font-normal self-center">
          {isSideBarOpen ? "QwikNews" : currentFeedName}
        </li>
        <li>
          {isOntop ? (
            <FontAwesomeIcon
              icon={faRefresh}
              className="text-blue-500 text-[30px]"
              onClick={handleRefresh}
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-blue-500 text-[30px]"
              onClick={handleScrollToTop}
            />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Nav;
