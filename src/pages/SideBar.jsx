import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHippo,
  faRefresh,
  faArrowUp,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
  import {categoryList} from "../App.jsx"
function SideBar({ onSideBarToggle ,onNewsPref,newPref }) {
  const [fitlerCat, setFilterCat] = useState([]);

  // function handleFilterClick(id, action) {
  //   let val = categoryList.filter((item) => item.id == id);
  //   if (action == "add") {
  //     val.length > 0 &&
  //       val.length <= categoryList.length &&
  //       onNewsPref((prev) => [...prev, val[0]]);
  //   }
  //   if (action == "remove") {
  //     fitlerCat.length > 0 &&
  //     onNewsPref((prev) => prev.filter((cat) => cat.id != id));
  //   }
  //   console.log(newPref);
  // }

  return (
    <>
      <div
        style={{ display: onSideBarToggle ? "block" : "none" }}
        className="z-30  fixed shadow-lg sm:justify-center h-[100vh] w-full sm:w-[400px] bg-slate-100   overflow-hidden font-roboto overflow-scroll"
      >
        <div className="mb-10 w-full h-3"></div>

        <input
          type="text"
          placeholder=" &#128269; Search for news"
          className="w-full text-center focus:text-left p-1 pl-4"
        />

        <p className="m-1 text-center">
          Your preference{" "}
          <FontAwesomeIcon icon={faFilter} className="text-blue-500 fa-lg" />
        </p>
        <div className="flex flex-wrap justify-center  p-3">
          {categoryList.map((item) => (
            <FilterBtn
              id={item.id}
              key={item.id}
              onNewsPref={onNewsPref}
              filterText={item.category}
              newPref={newPref}
            />
          ))}
        </div>
        <p className="text-center m-1">View news based on category &#128269;</p>
        <div className="flex flex-row flex-wrap justify-center  p-3">
          {categoryList.map((item) => (
            <div className="">
              <button className="bg-blue-200 border border-blue-50 hover:bg-blue-300 w-[150px] text-black h-[4em] rounded-lg p-2 m-2">
                {item.category}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FilterBtn({ id, filterText, onNewsPref,newPref }) {
  const [isSelected, setIsSelectd] = useState(false);
  useEffect(()=>{
      const val = newPref.filter((item)=>item.id==id)
      if(val.length>0){
        setIsSelectd(true)
      }
  },[newPref])
  function handleFilterClick() {
    isSelected ? onNewsPref(id, "remove") : onNewsPref(id, "add");
    setIsSelectd((prev) => !prev);
  }
  return (
    <div>
      {" "}
      <button
        onClick={handleFilterClick}
        style={{
          backgroundColor: isSelected ? null : "#eeeeee",
          color: isSelected ? null : "black",
        }}
        className="bg-[#0055cc] hover:bg-[#0055cc] border border-[#0055cc] text-white rounded-lg p-2 m-2"
      >
        {filterText}
      </button>{" "}
    </div>
  );
}

export default SideBar;
