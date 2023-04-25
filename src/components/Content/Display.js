import "./Display.scss";
import { convertTime } from "../../utility";
import likeIcon from "../../assets/Icons/like.png";
import deleteIcon from "../../assets/Icons/delete.png";

function Display({ content, deleteComment, updateComment }) {

    const commentList = [];

    for (let i = 0; i < content.comments.length; i++) {

        const { comment, id, name, timestamp, likes} = content.comments[i];
        console.log(content.comments[i])
    
        commentList.push(
            <div className="displays__items" key={id}>
                <span className="displays__items--img"></span>
                <div className="displays__items--subflex">
                    <div className="displays__items--subflex-top">
                        <h4>{name}</h4>
                        <div className="displays__items--subflex-topright">
                            <ul>
                                <li onClick={()=>{
                                    updateComment(id)
                                }}><img src={likeIcon} alt="like"/>{likes}</li>
                                <li onClick={()=>{
                                    deleteComment(id)
                                }}><img src={deleteIcon} alt="delete"/></li>
                            </ul>
                            <span>{convertTime(timestamp)}</span>
                        </div>
                    </div>
                    <p>{comment}</p>
                </div>
            </div>
        )
    }

    return <div className="displays">{commentList}</div>

}

export default Display;