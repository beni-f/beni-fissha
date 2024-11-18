import styled from 'styled-components'

export const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    top: 25px;
    width: 80vh;
    height: 6.5vh;
    border: none;
    border-radius: 80px;
    background-color: white;
    flex-wrap: wrap;
    
    

    @media (min-width: 320px) and (max-width: 640px) {
        top: 0;
        border-radius: 0;
        min-width: 100%;
        width: 100%;
        height: 12vh;
    }

    @media (min-width: 640px) and (max-width: 1400px) {
        margin: 0 auto;
        padding: 0 10px;
        box-shadow: 5px 5px 5px rgba(0.1, 0.1, 0, 0.2);
    }
`;




export const NavItem = styled.h3`
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    border-radius: 15px;
    
    

    color: ${({ isActive }) => (isActive ? 'black' : 'gray')};
    font-weight: ${({isActive}) => isActive ? 500: 400};
    background-color: ${({isActive}) => isActive ? 'whitesmoke': 'none'};
    cursor: pointer;

    &:hover {
        color: black;
        font-weight: 500;
    }

    @media (min-width: 640px) {
        padding: 4px 10px;
        margin-left: 20px;
    }

`

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 640px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        border: solid;
        flex-wrap: wrap;
        margin: 0 auto;
        gap: 0%;
    }
`