import axios from "axios";
export const dBug = true;
import { env } from "./App";
export const newsList = [
  {
    imgUrl:
      "https://static.inshorts.com/inshorts/images/v1/variants/webp/xxs/2024/04_apr/4_thu/img_1712207889485_80.webp",
    articleUrl: "https://www.aninews.in/news/national/general-news/will-now-support-india-bloc-22-ljp-leaders-resign-over-ticket-denial20240403203632/",
    heading: "What are the sources of Rahul Gandhi's income?",
    summary:
      "Rahul Gandhi has declared several sources of income including rent, his MP salary and dividends and capital gains from mutual funds and shares. Interest from banks, bonds and royalty earnings are some other sources of his income, which was at ₹1.02 crore in 2022-23. He owns commercial buildings and agricultural and non-agricultural land, all worth a total of ₹11.15 crore.",
  },



];

export const categoryList = [
  { id: 1, category: "politics", keywords: ["politics", "bjp", "congress", "voting", "election"] },

  { id: 2, category: "sports", keywords: ["sports", "ipl", "footbal",] },
  { id: 3, category: "health", keywords: ["health", "life",] },
  { id: 4, category: "technology", keywords: ["technology",] },
  { id: 5, category: "entertainment", keywords: ["entertainment", "celebrity", "actor", "movies"] },
  { id: 6, category: "business", keywords: ["business", "investment", "funding"] },

  { id: 8, category: "education", keywords: ["education", "college", "school"] },
  { id: 9, category: "startup", keywords: ["startup", "investor"] },
  { id: 7, category: "misc", keywords: ["misc"] },
  { id: 10, category: "travel", keywords: ["travel"] },
  { id: 11, category: "science", keywords: ["science"] },
  { id: 12, category: "fashion", keywords: ["fashion", "outfit"] },
  { id: 13, category: "international", keywords: ["international", "world"] },

];

const IPurl = "https://api.ipify.org/?format=json"
/// this will get user's ip to serve the local news.

const geoLocation = "http://www.geoplugin.net/json.gp"
/// returns data in json.

async function getGeoLocation(val="regionName"){
  //// next step here will be to add geolocation city to localstorage.
  const response = await axios.get(geoLocation);
  if(response.data.geoplugin_status=="200"){
    const city = val.toLowerCase();
    return response.data;
  }
  else{
    return response.data;
  }

}
// // ip:str
// date:str
// location:str
// event:str | None = None
// app:str
export async function SendVisits(){
    const url = env=="prod"?"https://qwiknewsbackend.onrender.com/visits":"http://127.0.0.1:8000/visits";
    const val = {
      "ip": await getGeoLocation()["geoplugin_request"],
      'date': new Date().toLocaleDateString(),
      'location': await getGeoLocation()["geoplugin_city"],
      'event': "visit",
      'app': "qwiknews"
    }
   axios.get(geoLocation).then((res)=>{
    const val = {
      "ip": res.data["geoplugin_request"],
      'date': new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      'time': new Date().toTimeString(),
      'location':  res.data["geoplugin_city"],
      'event': "visit",
      'app': "qwiknews"
    }
    axios.post(url,val).then((res)=>{console.log(res)})
   })
   
   
  // console.log(res.data);
}

export function debug(input){
  dBug && console.log(input);
}