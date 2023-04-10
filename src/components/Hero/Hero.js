import "./Hero.scss";
import playIcon from "../../assets/Icons/play.svg";
import fullScreen from "../../assets/Icons/fullscreen.svg";
import volume from "../../assets/Icons/volume_up.svg";


function Hero({ video }) {

    return (
        <main className="hero">
            <div className="hero__container">
                <img className="hero__img" src={video.image} alt="" />
                <div className="hero__img--buttomflex">
                    <a className="hero__img--playicon" href="/"><img src={playIcon} alt="" /></a>
                    <div className="hero__img--videobar">
                        <span className="hero__img--videobar-bar"></span>
                        <span>0.00 / {video.duration}</span>
                    </div>
                    <div className="hero__img--cornorflex">
                        <a className="hero__img--fullScreen" href="/"><img src={fullScreen} alt="" /></a>
                        <a className="hero__img--volume" href="/"><img src={volume} alt="" /></a>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Hero;


//need to place the onclick event on the child component which has the list of videos, or pass as a prop
//