import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Frame from "./pages/Frame";
import ShortCards from "./components/ShortCards";
import axios from "axios";
import { newsList } from "./data";
import Nav from "./components/Nav";

const env = "prod"
const EvnUrl = env=="prod"?"https://qwiknewsbackend.onrender.com/":"http://127.0.0.1:8000/"

function App() {
  const [showTaskBar, setShowTaskBar] = useState(false);
  const [NewsData, setNewsData] = useState([
    {
      imgUrl:
        "https://static.inshorts.com/inshorts/images/v1/variants/webp/xxs/2024/04_apr/4_thu/img_1712207889485_80.webp",
      articleUrl:
        "https://www.aninews.in/news/national/general-news/will-now-support-india-bloc-22-ljp-leaders-resign-over-ticket-denial20240403203632/",
      heading: "What are the sources of Rahul Gandhi's income?",
      summary:
        "Rahul Gandhi has declared several sources of income including rent, his MP salary and dividends and capital gains from mutual funds and shares. Interest from banks, bonds and royalty earnings are some other sources of his income, which was at ₹1.02 crore in 2022-23. He owns commercial buildings and agricultural and non-agricultural land, all worth a total of ₹11.15 crore.",
    },
  ]); // State to store fetched data
  function handleShowTaskBar() {
    setShowTaskBar((prev) => {
      return !prev;
    });
  }

  async function DataHandle(list) {
    if (list) {
      const formatedList = list.map((item) => {
        return {
          imgUrl: item.urlToImage,
          articleUrl: item.url,
          heading: item.title,
          summary: item.description,
        };
      });
      setNewsData(formatedList);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(EvnUrl);
      await DataHandle(response.data);
      //console.log(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      {/* <div>
        <h1 className="text-center p-2 bg-slate-600 text-white  w-full mb-2">
          Quick News
        </h1>
      </div> */}
      <div className="flex flex-col justify-center items-center">
        {NewsData.map((item) => (
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
