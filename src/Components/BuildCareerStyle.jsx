import styled from "styled-components"

export const BuildCareerWrapper = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #dbf1db;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    
    .career-wrapper{
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }
    .career-header{
        text-align: center;
        font-size:3.3rem;
        font-weight: bold;
       font-family: sans-serif;
    }
    .career-subtext-holder{
        display: flex;
        justify-content: center;
        font-family: sans-serif;
    }
    .career-subtext{
        text-align: center;
    }
`