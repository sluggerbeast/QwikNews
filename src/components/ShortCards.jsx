import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function ShortCards({ imgUrl, aUrl, heading, summary, taskToggle }) {
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
        className="flex flex-col  justify-center h-[95vh] w-fit sm:w-[400px] bg-slate-100 rounded rounded-[10px] mb-1 overflow-hidden font-roboto"
      >
        <div className="max-h-[50vh] h-fit flex-auto overflow-hidden">
          {/* <img src={imgUrl} className="w-[100%]  max-h-[50vh] " alt="something went wrong" loading='lazy'/> */}
          <LazyLoadImage
            className="ml-[-50%] translate-x-[50%]  w-[100%]  max-h-[50vh] "
            src={imgUrl}
            width={600}
            height={400}
            
            alt="Something went wrong please reload page."
          />
        </div>
        <div className="m-4 flex-[70%]">
          <h2 className=" mt-2 font-[500] text-xl">{heading}</h2>
          <p className="font-[300] mt-2 text-slate-900 text-[1.1rem]">
            {summary}
          </p>
          <p className="mt-2" onClick={handleOpenArticle}>
            <a href={aUrl} target="_blank">
              read more...
            </a>
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
