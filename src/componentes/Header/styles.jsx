import styled from "styled-components"

export const HeaderElement = styled.header`
    margin-top: 62px;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .img-logo {
        height: 45px;
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
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;

    .user {
        display: flex;
        align-items: center;
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
        align-items: center;
        list-style: none;
    }

    .icons {
        position: relative;
        margin-right: 20px;
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
`