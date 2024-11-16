import styled from 'styled-components'

export const NavStyle = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    align-items: center;
    top: 15px;
    margin: 0 360px;
    width: 700px;
    height: 50px;
    border: none;
    border-radius: 80px;
    background-color: white;
    margin-bottom: 100px;
    
    h3 {
        font-size: 17px;
        font-weight: 400;
        color: gray;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        margin: 0 90px;   
        width: 75vw;
        height: 7vh;   
        
        h3 {
            font-size: 15px;
            font-weight: 400;
            color: gray;
        }
    }
`