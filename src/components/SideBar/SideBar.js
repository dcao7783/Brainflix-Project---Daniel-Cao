
import "./Sidebar.scss";

function SideBar({videoList, selectVideo}) {

    return (
        <article className="sidebar">
            <h3>Next Videos</h3>
            {videoList.map((video) => (
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
