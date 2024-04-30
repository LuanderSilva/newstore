import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
`
export const Menu = styled.nav `
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
    .list-produtos {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        margin-top: 60px;
        grid-gap: 10px;
    }
    

    .span-title {
        color: #FFF;
    }
`

export const ContainerFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`