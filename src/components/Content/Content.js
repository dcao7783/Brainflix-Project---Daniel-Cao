import viewIcon from "../../assets/Icons/views.svg";
import likeIcon from "../../assets/Icons/likes.svg";
import "./Content.scss"


// const newDate = new Date(timeConvert);
// const option = {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'}
// const displayDate = newDate.toLocaleDateString(undefined, option);


function Content({ content }) {

    function convertTime() {
        const timeConvert = content.timestamp;
        const newDate = new Date(timeConvert)
        const option = {month: "2-digit", day: "2-digit", year: "numeric"}
        const displayDate = newDate.toLocaleDateString(undefined, option)

        return displayDate
    }

    return (
        <section className="content">
            <h1>{content.title}</h1>
            <div className="content__subflex">
                <div className="content__subflex--flexleft">
                    <h4>By {content.channel}</h4>
                    <p>{convertTime()}</p>
                </div>
                <div className="content__subflex--flexright">
                    <p>
                        <img id="viewIcon" src={viewIcon} alt="" />
                        <span>{content.views}</span>
                    </p>
                    <p>
                        <img src={likeIcon} alt="" />
                        <span>{content.likes}</span>
                    </p>
                </div>
            </div>
            <p className="content__description">{content.description}</p>

            <div className="comments">
                <h4 className="comments-heading"></h4>
                <div className="comments__container">
                    <form className="comments__container-form">
                        <img src="" alt=""/>
                        <label for="comment">Join the conversation</label>
                        <input type="text" name="comment" id="comment" placehoder="Add a new comment"/>
                        <button type="submit"><img src="" alt=""/>comment</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Content

//parent(content) should pass props then pass to the hero
//then parent component should control what to display to the top\
//need a onClick for the divs, then need to pass in a parameter to the parents
//passing the prop function as parameter to retrieve the video Id
//define the onClick function in the app, and pass the video id to the parent
