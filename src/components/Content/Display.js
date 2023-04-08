function Display({ content }) {

    const commentList = [];

    for (let i = 0; i < content.comments.length; i++) {
        
        const {comment, id, name, timestamp} = content.comments[i];

        commentList.push(
            <div className="displays__container" key={id}>
                <img src="" alt="" />
                <div className="displays__container--subflex">
                    <div className="displays__container--subflex-top">
                        <h4>{name}</h4>
                        <span>{timestamp}</span>
                    </div>
                    <p>{comment}</p>
                </div>
            </div>
        )
    }

    return <>{commentList}</>

}

export default Display;