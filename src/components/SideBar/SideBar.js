
import "./Sidebar.scss";

function SideBar({videoList, selectVideo, videoSelect}) {

    let updatedVideoList = videoList.filter ((video) => video.id !== videoSelect.id)

    return (
        <article className="sidebar">
            <h3>Next Videos</h3>
            {updatedVideoList.map((video) => (
                <div onClick={() => {selectVideo(video.id)}} key={video.id} className="sidebar__items">
                    <img src={video.image} alt=""/>
                    <div className="sidebar__items--subflex">
                        <h4>{video.title}</h4>
                        <span>{video.channel}</span>
                    </div>
                </div>
            ))}
        </article>
    )
};

export default SideBar;
