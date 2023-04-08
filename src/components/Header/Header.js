
import "./Header.scss"
import logo from "../../assets/Logo/BrainFlix-logo.svg"
import uploadIcon from "../../assets/Icons/upload.svg"
import searchIcon from "../../assets/Icons/search.svg"
import profileImg from "../../assets/Images/Mohan-muruge.jpg"



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
            <button type="submit"><img src={uploadIcon} />Upload</button>
            <img className="header-form__nav--img header-form__nav--img-2" src={profileImg} alt={iconImage} />
        </form>
    )
}




function Header() {

    const description = "logo-pic";
    return (
        <header className="header">
            <div className="header__logo">
                <a href="#">
                    <img className="header__logo--img" src={logo} alt={description} />
                </a>
            </div>
            <Form />
        </header>
    );
}

export default Header