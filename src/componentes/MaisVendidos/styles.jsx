import styled from "styled-components";

export const Section = styled.section`
    margin-top: 80px;

    .s1-title {
        color: #fff;
        font-weight: 400;
        margin-bottom: 35px;
        font-size: 2rem;
        letter-spacing: 1px;
    }
`

export const ContentCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
`