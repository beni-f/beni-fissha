import styled from "styled-components";
import { ProjectStyle } from "./styles/ProjectStyle";
import React from 'react'

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f2f2f2;
    border: solid #f2f2f2;
    width: 700px;
    height: 28rem;
    padding: 20px 40px;

    .about-project{
        border: solid;
        padding-right: 60px;

        h1 {
            font-weight: 500;
        }

        p {
            font-size: 20px;
            line-height: 35px;
        }
    }
`

export default function ProjectPage() {
    return (
        <ProjectStyle>
            <h4>My Projects</h4>

            <ProjectContainer>
                <div className="about-project">
                    {/* <h1>UrbanShop</h1>
                    <p>A simple e-commerce web app that I've made.ashfiosufdsdfsdofisdffajsidfsdfhsdhsdfw8oehgawe8</p>
                    <div>

                    </div> */}
                    <h3>In progress, please come back later...</h3>
                </div>
                <div>
                
                </div>
            </ProjectContainer>
        </ProjectStyle>
    )
}