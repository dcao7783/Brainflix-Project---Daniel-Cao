import uploadVideo from "../assets/Images/Upload-video-preview.jpg";
import publishIcon from "../assets/Icons/publish.svg";
import "./Upload.scss"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function UploadPage({ updateVideos }) {

    const altDescription = "uploadVideoImg";
    const navigate = useNavigate();


    return (
        <div className="upload">
            <h1>Upload Video</h1>
            <form className="upload__form" onSubmit={(e) => {
                e.preventDefault()
                const title = e.target.title.value;
                const description = e.target.description.value

                axios.post("http://localhost:8080/videos", { title: title, description: description }).then(resp => {
                    console.log(resp.data)
                    axios.get("http://localhost:8080/videos").then(response => {
                        updateVideos(response.data)
                    })
                    navigate('/')
                })
            }}>
                <div className="upload__container">
                    <div className="upload__container--img">
                        <h3>Video Thumbnail</h3>
                        <img src={uploadVideo} alt={altDescription} />
                    </div>
                    <div className="upload__form--subflex">
                        <div className="upload__form--inputflex">
                            <label htmlFor="title">Title your Video</label>
                            <input type="text" name="title" id="title" placeholder="Add a title to your video" />
                        </div>
                        <div className="upload__form--inputflex">
                            <label htmlFor="description">Add a video description</label>
                            <input type="text" name="description" id="description" placeholder="Add a description to your video" />
                        </div>
                    </div>
                </div>
                <div className="upload__form--bottom">
                    <Link to="/"><button className="upload__form--desktop" type="reset">Cancel</button></Link>
                    <button className="upload__form--stay" type="submit"><img src={publishIcon} alt="" />Publish</button>
                    <Link to="/"><button className="upload__form--mobile" type="reset">Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default UploadPage