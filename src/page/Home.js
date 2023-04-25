
import Content from "../components/Content/Content";
import SideBar from "../components/SideBar/SideBar";
import Hero from "../components/Hero/Hero";
import './Home.scss';
import { useEffect, useState } from 'react';
import axios from "axios";

import { useParams } from "react-router-dom";

function HomePage({ arrVideos }) {

    const { id } = useParams()
    console.log(`this is the ${id} param`)

    const [video, setVideo] = useState(null);

    const submitComment = (comment, id) => {
        axios.post(`http://localhost:8080/videos/${id}/comments`, {comment:comment, id:id}).then(response => {
            axios.get(`http://localhost:8080/videos/${id}`).then(response=>{
                setVideo(response.data)
            })
        })
        console.log(id)
    }

    const updateComment = (commentId) => {
        const vidId = id || arrVideos[0].id
        axios.put(`http://localhost:8080/videos/${vidId}/comments/${commentId}/like`).then(response=>{
            axios.get(`http://localhost:8080/videos/${vidId}`).then(response=>{
                setVideo(response.data)
            })
        })
    }

    const deleteComment = (commentId) => {
        const vidId = id || arrVideos[0].id
        axios.delete(`http://localhost:8080/videos/${vidId}/comments/${commentId}`).then(response=>{
            axios.get(`http://localhost:8080/videos/${vidId}`).then(response=>{
                setVideo(response.data)
            })
        })
    }

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:8080/videos/${id}`)
                .then(response => {
                    console.log(response.data)
                    setVideo(response.data)

                }).catch(e => console.log(e))
        } else {
            console.log('no id!!')
            if (arrVideos) {

                console.log(arrVideos[0].id)
                axios
                    .get(`http://localhost:8080/videos/${arrVideos[0].id}`)
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
                <Content content={video} submitComment={submitComment} deleteComment={deleteComment} updateComment={updateComment} />
                <SideBar arrVideos={arrVideos} selectedVideo={video} />
            </div>
        </>
    )
}

export default HomePage;