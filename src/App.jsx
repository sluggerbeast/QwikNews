import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Frame from "./pages/Frame";
function ShortCards({ imgUrl,aUrl, heading, summary, taskToggle }) {

  const [openIFrame,setOpenIFrame] = useState(false)

  function handleTaskBarToggle() {
    taskToggle();
  }

  function handleOpenArticle(){

    setOpenIFrame(true);

  }

  return (
    <>
    
    <div
      onClick={handleTaskBarToggle}
      className="flex flex-col justify-center h-[100vh] w-fit sm:w-[400px] bg-slate-100 rounded rounded-[10px] mb-1 overflow-hidden font-roboto"
    >
      <div className="max-h-[50vh] h-fit flex-auto">
        <img src={imgUrl} className="w-fit" loading="lazy" />
      </div>
      <div className="m-4 flex-[70%]">
        <h2 className=" mt-2 font-[500] text-xl">{heading}</h2>
        <p className="font-[300] mt-2 text-slate-900 text-[1.1rem]">
          {summary}
        </p>
        <p className="mt-2" onClick={handleOpenArticle}><a href={aUrl}>read more...</a></p>
      </div>

      <div class=" text-white bg-black  shadow-2xl flex-none ">
        <div
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        >
          <div className="w-full h-fit backdrop-blur-xl p-4">
            <h3>Rahul declared total assests worth 20 crores</h3>
            <p className="text-[0.8rem]">Tap to know more</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function App() {
  const [showTaskBar, setShowTaskBar] = useState(false);

  function handleShowTaskBar() {
    setShowTaskBar((prev) => {
      return !prev;
    });
  }

  const newsList = [
    {
      imgUrl:
        "https://static.inshorts.com/inshorts/images/v1/variants/webp/xxs/2024/04_apr/4_thu/img_1712207889485_80.webp",
      articleUrl: "https://www.aninews.in/news/national/general-news/will-now-support-india-bloc-22-ljp-leaders-resign-over-ticket-denial20240403203632/",
      heading: "What are the sources of Rahul Gandhi's income?",
      summary:
        "Rahul Gandhi has declared several sources of income including rent, his MP salary and dividends and capital gains from mutual funds and shares. Interest from banks, bonds and royalty earnings are some other sources of his income, which was at ₹1.02 crore in 2022-23. He owns commercial buildings and agricultural and non-agricultural land, all worth a total of ₹11.15 crore.",
    },

    {
      imgUrl:
        "https://static.inshorts.com/inshorts/images/v1/variants/webp/xxs/2024/04_apr/4_thu/img_1712207889485_80.webp",
      articleUrl: "https://www.aninews.in/news/national/general-news/will-now-support-india-bloc-22-ljp-leaders-resign-over-ticket-denial20240403203632/",
      heading: "What are the sources of Rahul Gandhi's income?",
      summary:
        "Rahul Gandhi has declared several sources of income including rent, his MP salary and dividends and capital gains from mutual funds and shares. Interest from banks, bonds and royalty earnings are some other sources of his income, which was at ₹1.02 crore in 2022-23. He owns commercial buildings and agricultural and non-agricultural land, all worth a total of ₹11.15 crore.",
    },
    {
      imgUrl:
        "https://static.inshorts.com/inshorts/images/v1/variants/webp/xxs/2024/04_apr/4_thu/img_1712207889485_80.webp",
      articleUrl: "https://www.aninews.in/news/national/general-news/will-now-support-india-bloc-22-ljp-leaders-resign-over-ticket-denial20240403203632/",
      heading: "What are the sources of Rahul Gandhi's income?",
      summary:
        "Rahul Gandhi has declared several sources of income including rent, his MP salary and dividends and capital gains from mutual funds and shares. Interest from banks, bonds and royalty earnings are some other sources of his income, which was at ₹1.02 crore in 2022-23. He owns commercial buildings and agricultural and non-agricultural land, all worth a total of ₹11.15 crore.",
    },
    {
      imgUrl:
        "https://static.inshorts.com/inshorts/images/v1/variants/webp/xxs/2024/04_apr/4_thu/img_1712207889485_80.webp",
      articleUrl: "https://www.aninews.in/news/national/general-news/will-now-support-india-bloc-22-ljp-leaders-resign-over-ticket-denial20240403203632/",
      heading: "What are the sources of Rahul Gandhi's income?",
      summary:
        "Rahul Gandhi has declared several sources of income including rent, his MP salary and dividends and capital gains from mutual funds and shares. Interest from banks, bonds and royalty earnings are some other sources of his income, which was at ₹1.02 crore in 2022-23. He owns commercial buildings and agricultural and non-agricultural land, all worth a total of ₹11.15 crore.",
    },
    
  ];

  return (
    <>
      <div
        style={{ display: showTaskBar ? "block" : "none" }}
        className="text-center p-3 bg-slate-100  fixed w-full mb-2 shadow"
      >
        <ul className="flex justify-between ">
          <li className="text-blue-500">Options</li>
          <li className="text-[1.1rem] font-normal">QwikNews</li>
          <li>
            <i class="fa fa-refresh text-blue-500" />
            {/* <i class="fa fa-arrow-up text-blue-500" /> */}

          </li>
        </ul>
      </div>
      {/* <div>
        <h1 className="text-center p-2 bg-slate-600 text-white  w-full mb-2">
          Quick News
        </h1>
      </div> */}
      <div className="flex flex-col justify-center items-center">
        {newsList.map((item) => (
          <ShortCards
            key={item.heading}
            imgUrl={item.imgUrl}
            aUrl={item.articleUrl}
            heading={item.heading}
            summary={item.summary}
            taskToggle={handleShowTaskBar}
          />
        ))}
      </div>
    </>
  );
}

export default App;
