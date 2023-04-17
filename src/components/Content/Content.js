
import profileImg from "../../assets/Images/Mohan-muruge.jpg"
import viewIcon from "../../assets/Icons/views.svg";
import likeIcon from "../../assets/Icons/likes.svg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import Display from "./Display";
import { convertTime } from "../../utility";
import { useEffect, useState } from "react";
import "./Content.scss"
import axios from "axios";
import { base_url, api_key } from "../../utility";



function Content({ content }) {

    const [inputEl, setInputEl] = useState("")

    // useEffect (
    //     axios.post(`${base_url}/videos/${id}?api_key=${api_key}`)
    // )

    const handleChangeInputEl = (event) => {
        setInputEl(event.target.value)
    }
    
    const validInput = () => {
        if (inputEl === "") {
            return false
        }
        return true;
    }


    return (
        <section className="content">
            <h1>{content.title}</h1>
            <div className="content__subflex">
                <div className="content__subflex--flexleft">
                    <h4>By {content.channel}</h4>
                    <p>{convertTime(content.timestamp)}</p>
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
                <h4 className="comments-heading">{content.comments.length} Comments</h4>
                <div className="comments__container">
                    <img src={profileImg} alt="" />
                    <form className="comments__container--form">
                        <div className="comments__container--subflex">
                            <label htmlFor="comment">Join the conversation</label>
                            <input onChange={handleChangeInputEl} type="text" name="comment" id="comment" placeholder="Add a new comment" value={inputEl} className={`${validInput() ? "comments__container--input" : "comments__container--invalid"
                                }`} />
                        </div>
                        <button type="submit"><img src={commentIcon} alt="" />comment</button>
                    </form>
                </div>
            </div>

            <Display content={content} />
        </section>
    )
}

export default Content

