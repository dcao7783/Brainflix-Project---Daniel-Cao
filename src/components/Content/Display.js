import "./Display.scss";
import {convertTime} from "../../utility";

function Display({ content }) {

    const commentList = [];

    for (let i = 0; i < content.comments.length; i++) {
        
        const {comment, id, name, timestamp} = content.comments[i];

        commentList.push(
            <div className="displays__items" key={id}>
                <span className="displays__items--img"></span>
                <div className="displays__items--subflex">
                    <div className="displays__items--subflex-top">
                        <h4>{name}</h4>
                        <span>{convertTime(timestamp)}</span>
                    </div>
                    <p>{comment}</p>
                </div>
            </div>
        )
    }

    return <div className="displays">{commentList}</div>

}

export default Display;