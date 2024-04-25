import styled from "styled-components"

export const Container = styled.div`
    .button {
        width: 100%;
        padding: 20px;
        border: none;
        border-radius: 5px;
        background-color: #7F5AF0;
        font-family: 'Archivo', sans-serif;
        color: #FFF;
        letter-spacing: 1px;
        margin-top: 10px;
        margin-bottom: 20px;
        cursor: pointer;
        transition: .5s;
    }

    .button:hover {
        background-color: #8e6cf7;
    }
`

export const ContentCard = styled.div`
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        position: relative;
        max-width: 300px;
        height: 450px;

    .img-product {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        height: 190px;
    }

    .description-product {
        margin-top: 30px;
        border-top: 1px solid #E1E1E1;
    }

    .text-description {
        margin-top: 30px;
        font-size: .9rem;
        color: #414141;
    }

    /* PREÇO DO PRODUTO */

    .price-bottom {
        display: flex;
        justify-content: space-between;
    }

    .price-content {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 30px;
    }

    .text {
        font-size: .8rem;
        color: #007837;
    }

    .text-bottom {
        font-size: .8rem;
    }

    .price {
        font-size: 1.3rem;
        color: #007837;
    }

    /* ICONE CORAÇÃO */

    .icon-heart {
        margin-top: 55px;
        cursor: pointer;
    }
`