import styled from "styled-components"

export const HeaderElement = styled.header`
    padding: 30px 0;
    transition: 0.2s ease;
    position: fixed;
    width: 100%;
    z-index: 100;
    
    &.scrolled {
        background-color: #343434;
    }

    .input-mobile {
        display: none;
    }

    .input-search-mobile {
        width: 100%;
        margin-top: 10px;
        padding: 15px;
        border-radius: 5px;
        border: none;
        font-family: 'Archivo', sans-serif;
        letter-spacing: 1px;
    }

    @media screen and (max-width: 720px){
        .input-mobile {
            display: block;
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .img-logo {
        height: 40px;
    }

    .input-search {
        width: 100%;
        margin: 0 30px;
        padding: 15px;
        border-radius: 5px;
        border: none;
        font-family: 'Archivo', sans-serif;
        letter-spacing: 1px;
    }

    .input-search:focus {
        outline: none;
    }

    .input-search::placeholder {
        font-family: 'Archivo';
        letter-spacing: 1px;
    }

    /* MEDIA */

    @media screen and (max-width: 720px){
        .input-search {
            display: none;
        }

        .img-logo {
            height: px;
        }
    }

`

export const Navigation = styled.nav`
    display: flex;

    .user {
        display: flex;
        gap: 5px;
    }

    .user-text {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        color: #94a1b2;
        font-size: .9rem;
        white-space: nowrap;
    }

    /* MENU ICONES */

    .menu-icons {
        display: flex;
        gap: 25px;
        list-style: none;
    }

    .icons {
        position: relative;
        cursor: pointer;
    }

    .number {
        text-align: center;
        position: absolute;
        background-color: #fff;
        left: 20px;
        top: -17px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        line-height: 22px;
    }

    .link {
        text-decoration: none;
        color: inherit;
    }

    .mobile-menu {
        display: none;
    }

    .mobile-menu div{
        width: 32px;
        height: 1px;
        background-color: #FFF;
        margin: 8px;
        transition: 0.5s;
    }

    .mobile-menu div{
        width: 32px;
        height: 1px;
        background-color: #FFF;
        margin: 8px;
        transition: 0.5s;
    }

    .mobile-menu.open .line1 {
        transform: rotate(-45deg) translate(-8px, 8px);
    }

    .mobile-menu.open .line2 {
        opacity: 0;
    }

    .mobile-menu.open .line3 {
        transform: rotate(45deg) translate(-5px, -5px);
    }


    /*  MEDIAS */

    @media screen and (max-width: 830px){
        .user {
            margin-right: 25px;
            cursor: pointer;
        }

        .user-text {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {
        .menu-icons {
            gap: 10px;
        }

        .user {
            margin-right:10px;
        }
    }

    @media screen and (max-width: 415px) {
        .menu-icons, 
        .user {
            display: none;
        }

        .mobile-menu {
            display: block;
        }
    }
`
