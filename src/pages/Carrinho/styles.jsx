import styled from "styled-components";

export const Container = styled.div`
    margin-top: 160px;
`

export const Menu = styled.nav`
    .list-menu {
        display: flex;
        align-items: center;
        list-style: none;
    }

    .list-menu img {
        width: 20px;
    }

    .list-menu p {
        color: #FFF;
        font-size: .8rem;
        line-height: 1px;
        white-space: nowrap;
    }
`

export const ContentCarrinho = styled.div`
    margin-top: 35px;
    margin-bottom: 50px;

    .titleh1 {
        color: #FFF;
        margin-bottom: 35px;
    }
`

export const Produtos = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 25px;

    .list-produtos {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        margin-top: 60px;
        grid-gap: 10px;
        list-style-type: none;
        width: 100%;
    }

    .list-items:last-child {
        margin-bottom: 50px;
    }

    .span-title {
        color: #FFF;
    }

    @media screen and (max-width: 650px) {
        flex-direction: column-reverse;

        .list-produtos {
            margin: 0;
        }
    }
`

export const FinalizarPedido = styled.div`
    margin-top: 63px;

    .card-finalizar {
        background-color: #FFF;
        padding: 20px;
        width: 270px;
        height: 170px;
        border-radius: 5px;
    }

    .title-resumo {
        text-align: center;
        margin-bottom: 20px;
        font-weight: 400;
    }

    .total {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #E1E1E1;
    }

    .text,
    .value {
        margin-top: 40px;
        font-size: 1.2rem;
    }

    .value {
        color: #007837;
    }

    .button-finalizar {
        padding: 15px;
        width: 100%;
        border: none;
        background-color: #2CB67D;
        border-radius: 5px;
        margin-top: 5px;
        color: #FFF;
        font-family: 'Archivo', sans-serif;
        letter-spacing: 1px;
        cursor: pointer;
    }

    @media screen and (max-width: 650px) {
        margin: 0;

        .card-finalizar {
            width: 100%;
        }
        
    }
`

export const ContainerFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`

