import styled from 'styled-components'

export const NavStyle = styled.div`
    border: none;
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    top: 25px;
    width: 36rem;
    box-shadow: 5px 5px 5px rgba(0.1, 0.1, 0, 0.2);
    
    border-radius: 80px;
    background-color: white;
    
    

    @media (min-width: 320px) and (max-width: 640px) {
        top: 0;
        border-radius: 0;
        width: 100%;
        height: 5rem;
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

    @media (max-width: 640px) {
        top: 0;
        margin: 0;
        height: 2rem;
        padding: 4px 5px;
        margin-left: 20px;
    }

`

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    z-index: 1000;

    @media (min-width: 320px) and (max-width: 640px) {
        position: fixed;
        top: 15px;
        height: 5rem;
        width: 100%;
        flex-wrap: wrap;
    }
`