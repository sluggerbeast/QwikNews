import { useEffect, useState } from "react";

import "./App.css";
import Frame from "./pages/Frame";
import ShortCards from "./components/ShortCards";
import axios from "axios";
import { newsList } from "./data";
import Nav from "./components/Nav";
import CardStack from "./components/CardStack";
import SkeletonFrame from "./components/SkeletonStack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./pages/SideBar";
import Swipeable from "./components/Swipeable";
const env = "prod"
const debug = true;
const EvnUrl = env=="prod"?"https://qwiknewsbackend.onrender.com/":"http://127.0.0.1:8000/"
const inshortUrl = env=="prod"?"https://qwiknewsbackend.onrender.com/inshorts?count=200":"http://127.0.0.1:8000/inshorts?count=200"
export const categoryList = [
  { id: 1, category: "politics" },

  { id: 2, category: "sports" },
  { id: 3, category: "health" },
  { id: 4, category: "technology" },
  { id: 5, category: "entertainment" },
  { id: 6, category: "business" },
  
  { id: 8, category: "education" },
  { id: 9, category: "startup" },
  { id: 7, category: "misc" },
  { id: 10, category: "travel" },
  { id: 11, category: "science" },
  { id: 12, category: "fashion" },
  { id:13,category:"international"},
  
];

function App() {
  const [showTaskBar, setShowTaskBar] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isSideBarOpen, setIsSidebarOpen] = useState(false)
  const [NewsData, setNewsData] = useState([]); // State to store fetched data
  const [newsPreference, setNewsPreference]  = useState([])
  const [newsFeed,setNewsFeed] = useState([])
  const [currentFeedName, setCurrentFeedName] = useState("Your feed");
  function handleShowTaskBar() {
    setShowTaskBar((prev) => {
      return !prev;
    });
  }
  // function handleNewPref(list){
  //   setNewsPreference(list)
  // }
  function  handleNewPref(id, action) {
    let val = categoryList.filter((item) => item.id == id);
    if (action == "add") {
      val.length >0 && setNewsPreference((prev) => [...prev, val[0]]);
    }
    if (action == "remove") {
      newsPreference.length > 0 &&
      setNewsPreference((prev) => prev.filter((cat) => cat.id != id));
    }
    console.log(newsPreference);
    console.log(NewsData.map((item)=>item.category))
  }
  
  function handleSideBarToggle(state){
    if(state==null || state==undefined){
      setIsSidebarOpen(prev=>!prev)
    } 
    else{
      setIsSidebarOpen(state)
    }
    
    }

  async function DataHandle(list) {
    if (list) {
      const formatedList = list.map((item) => {
        return {
          id: item.id,
          imgUrl: item.urlToImage,
          articleUrl: item.url,
          heading: item.title,
          summary: item.description,
          category:["mixed"]
        };
      });
      setNewsData(formatedList);
    }
  }
  async function DataHandleInshorts(list) {
    if (list) {
      const formatedList = list.map((item) => {
        return {
          id:item.id,

          imgUrl: item.imageUrl,
          articleUrl: item.url,
          heading: item.title,
          summary: item.content,
          category:item.categoryList  
        };
      });
      setNewsData(prev=>[...formatedList]);
    }
  }
  async function handleNewsFeed(){
    if(newsPreference.length>0){
      const prefArr = newsPreference.map((item)=>{
        return item.category;
      })
      console.log(prefArr)
      console.log(NewsData.map((item)=>item.category))

      let CatList = NewsData.filter((item)=>{
          
          if(prefArr.includes(item.category[0])){
            return true;
          }else{
            return false;
          }
      })
      console.log(CatList)
      setNewsFeed(CatList);
      
    }else {
      setNewsFeed(NewsData);

    }
    
  }
// this will handle the processing of news feed based on preferences.
  useEffect(()=>{
    handleNewsFeed();

  },[NewsData,newsPreference])

  useEffect(()=>{
    const pref = JSON.parse(localStorage.getItem("newsPref"))
    if(pref!==null){
      setNewsPreference(pref.pref)
      console.log(pref.pref)
    }
     

  },[])
  useEffect(()=>{
      localStorage.setItem('newsPref',JSON.stringify({"pref":newsPreference}))


  },[newsPreference])

  useEffect(() => {
    setNewsData([])
    const fetchData = async () => {
      // const responseHT = await axios.get(EvnUrl);
      // await DataHandle(responseHT.data);
      const responseIS = await axios.get(inshortUrl
      );
      await DataHandleInshorts(responseIS.data)
      //console.log(response.data);
    };

    fetchData();
    setIsLoading(false);

    handleNewsFeed();
    // console.log( NewsData)
  }, []);

  return (
    <>
    <SideBar onSideBarToggle={isSideBarOpen} onNewsPref={handleNewPref} newPref={newsPreference} />
      <Nav onTaskBarToggle={showTaskBar} isSideBarOpen={isSideBarOpen} onSideBarToggle={handleSideBarToggle}  currentFeedName={currentFeedName}/>
       <Swipeable onSideBarToggle={handleSideBarToggle} /> 
      {/* <div>
        <h1 className="text-center p-2 bg-slate-600 text-white  w-full mb-2">
          Quick News
        </h1>
      </div> */}
      <div className="flex flex-col justify-center items-center pt-4">
      {/* <CardStack > */}
          {isLoading || NewsData.length<=0?<SkeletonFrame />: newsFeed.map((item) => (
          // <SwiperSlide>
          <ShortCards
            key={item.id}
            imgUrl={item.imgUrl}
            aUrl={item.articleUrl}
            heading={item.heading}
            summary={item.summary}
            taskToggle={handleShowTaskBar}
          />
          // </SwiperSlide>
        ))}  
        {NewsData.length>0 && newsFeed.length<1 && <div className="mt-10 text-center"> No latest news of your preference yet <button onClick={setIsSidebarOpen} className="text-blue-500">click here to change preference</button> </div>}

        
          
        {/* </CardStack>
         */}
      </div>
    </>
  );
}

export default App;
