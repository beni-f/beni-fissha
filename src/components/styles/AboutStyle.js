import styled from 'styled-components'

export const AboutStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 200px;

    @media (min-width: 340px) and (max-width: 540px) {
        padding: 0;
    }

    @media (min-width: 540px) and (max-width: 940px) {
        padding: 0 50px;
    }

    @media (min-width: 940px) and (max-width: 1200px) {
        padding: 0 100px;
    }

    h4 {
        text-align: center;
        font-size: 30px;
        font-weight: 500;
    }

    p {
        margin:0 ;
        font-size: 20px;
        text-indent: 7%;
        text-align: center;
        line-height: 40px;
    }
`   