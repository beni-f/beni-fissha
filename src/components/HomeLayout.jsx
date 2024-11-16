import { HomeStyle } from "./styles/HomeStyle";
import ProfileImage from './images/profile1.png'
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import LinkedinProfile from './images/linkedin.png'
import GithubProfile from './images/github.png'


const ImageBorder = styled.div`
    margin: 0;
    border: solid 8px white;
    border-radius: 1000px;
    overflow: hidden;
    display: inline-block;
    width: 100px;
    height: 100px;

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

const ContactStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    button {
        transition: transform 0.3s ease;
        margin-left: 20px;
    }

    .contactButton {
        color: white;
        background-color: #080b1c;
        padding: 15px 30px;
        border: none;
        border-radius: 25px;
        font-size: 20px;
    }

    .downloadButton {
        color: black;
        background-color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-size: 20px;
    }

    .linkedinProfile {
        border: none;
        border-radius: 50px;
        width: 70px;
    }

    .githubProfile {
        border: none;
        border-radius: 50px;
        width: 70px;
    }

    button:hover {
        transform: scale(1.1)
    }

    @media (max-width: 768px) {
        .contactButton {
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 20px;
        }

        .downloadButton {
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 17px;
        }

        .linkedinProfile {
            border-radius: 70px;
            width: 50px;
        }

        .githubProfile {
            border-radius: 70px;
        }

    }
`

export default function HomeLayout() {
    return (
        <HomeStyle>
            <ImageBorder>
                <img src={ProfileImage} alt="" />
            </ImageBorder>
            <div>
                <h1>Hello, I'm Beni. <span>I'm a</span> full-stack developer. <span>I enjoy making digital ideas come to life!</span></h1>
            </div>
            <ContactStyle>
                <button className="contactButton">
                    Contact me here <FaArrowRight/>
                </button>
                <button className="downloadButton">Download CV </button>
                <button className="linkedinProfile">
                    <img src={LinkedinProfile} alt="Linkedin Profile" />
                </button>
                <button className="githubProfile">
                    <img src={GithubProfile} alt="" />
                </button>
            </ContactStyle>
        </HomeStyle>
    )
}