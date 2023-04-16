
import "./Sidebar.scss";
import {Link} from "react-router-dom";

// function SideBar({videoList, selectVideo, videoSelect}) {
    function SideBar({arrVideos, selectedVideo}) {

    let newArrVideos = arrVideos.filter ((video) => video.id !==selectedVideo.id)

    return (
        <article className="sidebar">
            <h3>Next Videos</h3>
            {newArrVideos.map((video) => (
                <Link key={video.id}  to={`/videos/${video.id}`} className="sidebar__items">
                    <img src={video.image} alt=""/>
                    <div className="sidebar__items--subflex">
                        <h4>{video.title}</h4>
                        <span>{video.channel}</span>
                    </div>
                </Link>
            ))}
        </article>
    )
};

export default SideBar;
