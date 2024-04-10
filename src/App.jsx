import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Frame from "./pages/Frame";
import ShortCards from "./components/ShortCards";
import axios from "axios";
import { newsList } from "./data";
import Nav from "./components/Nav";
import CardStack from "./components/CardStack";
import SkeletonFrame from "./components/SkeletonStack";

const env = "prod"
const EvnUrl = env=="prod"?"https://qwiknewsbackend.onrender.com/":"http://127.0.0.1:8000/"

function App() {
  const [showTaskBar, setShowTaskBar] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [NewsData, setNewsData] = useState([]); // State to store fetched data
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
    setIsLoading(false);
  }, []);

  return (
    <>
      <Nav onTaskBarToggle={showTaskBar} />
      {/* <div>
        <h1 className="text-center p-2 bg-slate-600 text-white  w-full mb-2">
          Quick News
        </h1>
      </div> */}
      <div className="flex flex-col justify-center items-center pt-4">
      
         {isLoading || NewsData.length<=0?<SkeletonFrame />: NewsData.map((item) => (
          <ShortCards
            key={item.heading}
            imgUrl={item.imgUrl}
            aUrl={item.articleUrl}
            heading={item.heading}
            summary={item.summary}
            taskToggle={handleShowTaskBar}
          />
        ))} 

        {/* <CardStack /> */}
        
      </div>
    </>
  );
}

export default App;
