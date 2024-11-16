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
        /* Adjusting for mobile devices */
        margin: 0 20px;      /* Reduced margins */
        width: 90vw;         /* Use 90% of the viewport width */
        height: 10vh;        /* Height should scale with the viewport */
        
        h3 {
            font-size: 14px; /* Smaller font size for mobile */
            font-weight: 400;
            color: gray;
        }
    }

    @media (max-width: 480px) {
        /* Adjust further for very small screens */
        margin: 0 10px;      /* Further reduced margin */
        width: 85vw;         /* Further reduced width */
        height: 8vh;         /* Even smaller height */
        
        h3 {
            font-size: 13px; /* Even smaller font size for very small screens */
        }
    }
`
