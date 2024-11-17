import styled from 'styled-components'

export const NavStyle = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    align-items: center;
    margin: 0 65vh;
    top: 15px;
    width: 70vh;
    height: 6vh;
    border: none;
    border-radius: 80px;
    background-color: white;
    margin-bottom: 100px;
    
    h3 {
        font-size: 14px;
        font-weight: 400;
        color: gray;
    }

    @media (min-width: 320px) and (max-width: 540px) {
        margin: 0;
        width: 100%;
        top: 0;
        border-radius: 0;
        padding: 30px 25px;   
    }
`
