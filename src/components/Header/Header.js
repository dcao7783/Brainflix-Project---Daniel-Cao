import { Link } from "react-router-dom";
import "./Header.scss"
import logo from "../../assets/Logo/BrainFlix-logo.svg"
import uploadIcon from "../../assets/Icons/upload.svg"
import searchIcon from "../../assets/Icons/search.svg"
import profileImg from "../../assets/Images/Mohan-muruge.jpg"
import { useParams } from "react-router-dom";


function Form() {

    const iconImage = "iconImage";

    return (
        <form className="header-form">
            <div className="header-form__nav">
                <div className="header-form__nav--input">
                    <img src={searchIcon} alt={iconImage} />
                    <input type="search" id="searchBar" name="searchBar" placeholder="search" />
                </div>
                <img className="header-form__nav--img header-form__nav--img-1" src={profileImg} alt={iconImage} />
            </div>
            <Link class="header-form__nav--button" to="/upload"><button type="submit"><img src={uploadIcon} />Upload</button></Link>
            <img className="header-form__nav--img header-form__nav--img-2" src={profileImg} alt={iconImage} />
        </form>
    )
}




function Header({video}) {

    const { id } = useParams()
    const description = "logo-pic";
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img className="header__logo--img" src={logo} alt={description} />
                </Link>
            </div>
            <Form />
        </header>
    );
}

export default Header