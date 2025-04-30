import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";



function ShortCards({ imgUrl, aUrl, heading, summary, taskToggle,date }) {
  const [openIFrame, setOpenIFrame] = useState(false);
  let imageURL = imgUrl;
  if (imgUrl === null || imgUrl == "") {
    console.log("Image URL is null");
    imageURL =
      "https://dummyjson.com/image/400x200/008080/ffffff?text=Please+reload!";
    console.log(imageURL);
  }
  const ig = "https://dummyjson.com/image/400x200/008080/ffffff?text=Please+reload!"

  function handleTaskBarToggle() {
    taskToggle();
  }

  function handleOpenArticle() {
    setOpenIFrame(true);
  }

  return (
    <>
      <div
        onClick={handleTaskBarToggle}
        className="flex flex-col  justify-center h-[95vh] w-fit sm:w-[400px] sm:max-w-[100%] max-w-[100%] overflow-auto bg-slate-100 rounded-[10px] mb-1 font-roboto"
      >
        <div className="max-h-[50vh] h-fit flex-auto overflow-hidden">
          {/* <img src={imgUrl} className="w-[100%]  max-h-[50vh] " alt="something went wrong" loading='lazy'/> */}
          <LazyLoadImage
            className=" w-[100%]  max-h-[50vh] "
            src={imgUrl?imgUrl:"https://placehold.co/600x400/000000/FFFFFF.png"}
            
            
            alt="Something went wrong please reload page."
          />
        </div>
        <div className="m-4 flex-[70%]">
          <h2 className=" mt-2 font-[500] text-xl">{heading}</h2>
          <p className="font-[300] mt-2 text-slate-900 text-[1.1rem] overflow-auto">
            {summary}
          </p>
          <p className="mt-2 w-full text-sm" onClick={handleOpenArticle}>
          
            <a href={aUrl} target="_blank">
            <div className="text-sm text-slate-500 font-light italic bottom-0 right-0">summarized by AI</div>
            read more...
            </a>
            <span className="text-xs ml-[45%]">{date}</span>
          </p>
        </div>

        <div class=" text-white bg-black  shadow-2xl flex-none ">
          <div
            style={{
              backgroundImage: `url(${ig})`,
              loading: "lazy",
            }}
          >
            <div className="w-full h-fit backdrop-blur-xl p-4">
            <a href={aUrl} target="_blank"><h3>Click here for more details</h3>
              <p className="text-[0.8rem]">Tap to know more</p></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortCards;
