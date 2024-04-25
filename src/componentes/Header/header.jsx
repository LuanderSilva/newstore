import { HeaderElement, Container, Navigation } from './styles'
import { useState, useEffect } from 'react';


function Header() {
    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <HeaderElement className={scrolling ? 'scrolled' : ''}>

            {/* CONTAINER RECEBE A CLASSE GLOBAL GRID-LAYOUT */}

            <Container className='grid-layout'>
                <img className='img-logo' src="./icons/logo.png" alt="Logo" />
                <input className='input-search' type="search" placeholder='Pesquise o seu produto'/>

                <Navigation>
                    <div className='user'>
                        <img src="./icons/user-circle-fill.svg" alt="" />
                        <div className='user-text'>
                            <span>Minha conta</span>
                            <span>Entrar / Cadastro</span>
                        </div>
                    </div>

                    {/* MENU ICONES */}

                    <ul className='menu-icons'>
                        <li className='icons'>
                            <img src="./icons/heart-fill.svg" alt="" />
                            <span className='number'>0</span>
                        </li>

                        <li className='icons'>
                            <img src="./icons/cart-fill.svg" alt="" />
                            <span className='number'>0</span>
                        </li>
                    </ul>
                </Navigation>
            </Container>
        </HeaderElement>
    )
}

export default Header;