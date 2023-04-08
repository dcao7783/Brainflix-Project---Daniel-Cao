
import './App.scss';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import SideBar from "./components/SideBar/SideBar";
import Hero from "./components/Hero/Hero";
import videoDetails from "./data/video-details.json";
import {useState} from 'react';

function App() {
  const [selectedVideos, setSelectedVideos] = useState(videoDetails[0]);

  const handleSelectVideo = (selectedId) => {
    const foundVideo = videoDetails.find((video) => video.id === selectedId);
    
    setSelectedVideos (foundVideo);
  }

  return (
    <>
      <Header />
      <Hero video={selectedVideos} />
      <Content content={selectedVideos}/>
      <SideBar />
    </>
  );
}

export default App;


//control down from the APP, 
//take the video Id from the content list and elevated up to the App(parent)
//from there I can 