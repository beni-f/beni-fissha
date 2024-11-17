import styled from 'styled-components'

export const NavStyle = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    align-items: center;
    top: 15px;
    width: 70vh;
    height: 6vh;
    border: none;
    border-radius: 80px;
    background-color: white;
    margin-bottom: 100px;

    @media (min-width: 320px) and (max-width: 640px) {
        margin: 0;
        width: 100%;
        height: 4rem;
        top: 0;
        border-radius: 0;
        flex-wrap: wrap;
    }

    @media (min-width: 640px) and (max-width: 1400px) {
        margin: 0 auto;
    }
`;




export const NavItem = styled.h3`
    font-size: 14px;
    padding: 4px 10px;
    border-radius: 15px;
    margin: 0;

    color: ${({ isActive }) => (isActive ? 'black' : 'gray')};
    font-weight: ${({isActive}) => isActive ? 500: 400};
    background-color: ${({isActive}) => isActive ? 'whitesmoke': 'none'};
    cursor: pointer;

    &:hover {
        color: black;
        font-weight: 500;
    }
    
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
`