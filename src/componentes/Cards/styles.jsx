import styled from "styled-components"

export const ContainerCard = styled.div`
        flex-direction: column;
        align-items: center;
        width: 300px;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        position: relative;

    .img-product {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        height: 120px;
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