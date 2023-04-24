
import profileImg from "../../assets/Images/Mohan-muruge.jpg"
import viewIcon from "../../assets/Icons/views.svg";
import likeIcon from "../../assets/Icons/likes.svg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import Display from "./Display";
import { convertTime } from "../../utility";
import { useState } from "react";
import "./Content.scss"
import axios from "axios";



function Content({ content, submitComment }) {

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
                    <img src={profileImg} alt="profile-img" />
                    <form className="comments__container--form" onSubmit={(e) => {
                        e.preventDefault()
                        const input = e.target.comment.value;
                        submitComment(input, content.id)
                    }}>
                        <div className="comments__container--subflex">
                            <label htmlFor="comment">Join the conversation</label>
                            <input type="text" name="comment" id="comment" placeholder="Add a new comment" required />
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

