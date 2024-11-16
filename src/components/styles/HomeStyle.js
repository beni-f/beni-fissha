import styled from 'styled-components'

export const HomeStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 150px 120px;

    
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    h1 {
        font-size: 40px;
        margin-left: 200px;
        text-align: center;
    }

    span {
        font-weight: 400;
        font-style: italic;
    }

    @media (max-width: 768px) {
        margin: 130px 50px;
        h1 {
            font-size: 37px;
            margin-left: 0px;
            text-align: center;
        }
    }
`