import styled from "styled-components";

export const ContainerMenu = styled.div`
    position: fixed;
    top: 145px;
    right: 0;
    height: 100%;
    background-color: #fff;
    z-index: 1001;
    width: ${props => (props.$active ? '100%' : '0')};
    transition: 0.3s ease-in-out;
    display: none;

    .content {
        display: ${props => (props.$active ? 'flex' : 'none')};
        flex-direction: column;
        text-align: center;
        justify-content: center;
        margin-top: 50px;
    }

    .user, 
    .user-text  {
        display: block;
        margin: 0;
    }

    .user-text {
        display: flex;
        color: #16161A;
        font-weight: 500;
    }

    .menu-icons {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 35px;
        gap: 30px;
    }

    .number {
        left: 53%;
        background-color: #4a4a55;
        color: #FFF;
    }

    @media screen and (max-width: 415px) {
        display: block;
    }
`