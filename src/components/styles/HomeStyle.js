import styled from 'styled-components'

export const HomeStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 120px 0px;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(212,194,226,1) 87%);
    
    
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    h1 {
        font-size: 40px;
        text-align: center;
        font-weight: 600;
    }

    span {
        font-weight: 400;
        font-style: italic;
    }

    @media (max-width: 640px) {
        h1 {
            font-size: 28px;
            padding: 0 2rem;
            margin-left: 0px;
            text-align: center;
        }
    }
`