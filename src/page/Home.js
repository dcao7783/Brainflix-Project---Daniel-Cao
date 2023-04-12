import Content from "../components/Content/Content";
import SideBar from "../components/SideBar/SideBar";
import Hero from "../components/Hero/Hero";
import './Home.scss';
import videoDetails from "../data/video-details.json";
import { useEffect, useState } from 'react';


function HomePage() {


    const [selectedVideos, setSelectedVideos] = useState(videoDetails[0]);

    const handleSelectVideo = (selectedId) => {
        const foundVideo = videoDetails.find((video) => video.id === selectedId);

        setSelectedVideos(foundVideo);
    }
    return (
        <>
            <Hero video={selectedVideos} />
            <div className="root-desktopflex">
                <Content content={selectedVideos} />
                <SideBar videoSelect={selectedVideos} videoList={videoDetails} selectVideo={handleSelectVideo} />
            </div>
        </>
    )
}

export default HomePage;