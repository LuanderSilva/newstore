import styled from "styled-components"

export const Section = styled.section`
    margin-top: 160px;

    .s1-title {
        color: #fff;
        font-weight: 400;
        margin-bottom: 35px;
        font-size: 2rem;
        letter-spacing: 1px;
    }

     .slick-slide {
        padding: 0 5px;
    }

    .slick-next {
       margin: 0px 5px;
    }

    .slick-prev {
        margin: 0 15px;
    }

    .slick-prev:before {
        font-size: 25px;
        margin-left: -30px;
    }

    .slick-next:before {
        font-size: 25px;
    }

    // media

    @media screen and (max-width: 830px) {
        .s1-title {
            text-align: center;
            font-size: 1.7rem;
        }
    }
`