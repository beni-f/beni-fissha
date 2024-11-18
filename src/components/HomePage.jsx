import { HomeStyle } from "./styles/HomeStyle";
import ProfileImage from './images/profile1.png'
import styled from "styled-components";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from 'react'


const ImageContainer = styled.div`
    margin: 0;
    border: solid 8px white;
    border-radius: 100%;
    overflow: hidden;
    display: inline-block;
    width: 100px;
    height: 100px;

    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

const TextContainer = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 200px; 
    margin-bottom: 10px;

    p {
        white-space: nowrap;
    }

    @media (max-width: 940px) {
        padding: 0 100px;
    }

    @media (max-width: 690px) {
        padding: 0 50px;
    }

    @media (max-width: 600px) {
        padding: 0;
    }
`;


const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width: 640px) {
        flex-direction: column;
        margin-bottom: 18px;
        gap: 35px;
    }


    button {
        display: inline-block;
        transition: transform 0.3s ease;
        margin-left: 20px;
    }

    .contactButton {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
        background-color: #080b1c;
        padding: 0 25px;
        height: 52px;
        border: none;
        border-radius: 25px;
        

        p {
            font-size: 20px;
            margin-right: 10px;
            white-space: nowrap;
        }

        @media (max-width: 640px) {
            transform: scale(1.2)
        }
    }

    .downloadButton {
        color: black;
        background-color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-size: 20px;
        white-space: nowrap;

        @media (max-width: 640px) {
            transform: scale(1.3);
        }
    }

    .linkedinProfile {
        border: none;
        background-color: white;
        border-radius: 70px;
        padding: 8px 10px;

        @media (max-width: 640px) {
            transform: scale(1.3);
        }
    }

    .githubProfile {
        border: none;
        background-color: white;
        border-radius: 70px;
        padding: 8px 10px;

        @media (max-width: 640px) {
            transform: scale(1.3);
        }
    }

    button:hover {
        transform: scale(1.1)
    }


`

export default function HomePage() {
    return (
        <HomeStyle>
            <ImageContainer>
                <img src={ProfileImage} alt="" />
            </ImageContainer>
            <TextContainer>
                <h1>Hello, I'm Beni. <span>I'm a</span> full-stack developer. <span>I enjoy making digital ideas come to life!</span> I enjoy building sites & apps. My focus is React (Next.js).</h1>
            </TextContainer>
            <ContactContainer>
                <button className="contactButton">
                    <p>Contact me here</p>
                    <FaArrowRight/>
                </button>
                <button className="downloadButton">Download CV </button>
                <button className="linkedinProfile">
                    
                        <FaLinkedin size={25}/>
                    
                </button>
                <button className="githubProfile">
                    <FaGithub size={25} />
                </button>
                
            </ContactContainer>
            
        </HomeStyle>
    )
}