
import Content from "../components/Content/Content";
import SideBar from "../components/SideBar/SideBar";
import Hero from "../components/Hero/Hero";
import './Home.scss';
import { useEffect, useState } from 'react';
import axios from "axios";
import { base_url, api_key } from "../utility";
import { useParams } from "react-router-dom";

function HomePage({ arrVideos }) {

    const { id } = useParams()
    console.log(`this is the ${id} param`)

    const [video, setVideo] = useState(null);

    useEffect(() => {
        if (id) {
            axios
                .get(`${base_url}/videos/${id}?api_key=${api_key}`)
                .then(response => {
                    console.log(response.data)
                    setVideo(response.data)

                }).catch(e => console.log(e))
        } else {
            console.log('no id!!')
            if (arrVideos){

                console.log(arrVideos[0].id)
                axios
                .get(`${base_url}/videos/${arrVideos[0].id}?api_key=${api_key}`)
                .then(response => {
                    console.log(response.data)
                    setVideo(response.data)

                }).catch(e => console.log(e))

            }
        }
    }, [id, arrVideos])



    if (!arrVideos || !video) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Hero video={video} />
            <div className="root-desktopflex">
                <Content content={video} />
                <SideBar arrVideos={arrVideos} selectedVideo={video} />
            </div>
        </>
    )
}

export default HomePage;