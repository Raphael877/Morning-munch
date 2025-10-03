import styled from "styled-components"

export const PartnerHeroWrapper  = styled.div`
    width: 100%;
    height: 15rem;
    display: flex;
    justify-content: center;
    /* margin-bottom: 0.9rem; */
    font-family: sans-serif;

    article{
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction:column;
        padding-block: 2rem;
    }

    .title{
        text-align: center;
        font-size: 3rem;
        padding-block: 0.5rem;
        font-weight: 800;
    }

    .sub-text{
        width: 100%;
        height: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        text-align: center;
        line-height : 1.6rem;
        margin-block:0.5rem;
        font-weight: 400;
    }
    span{
        color: #339e35;
    }
    `