import { HeaderElement, Container, Navigation } from './styles';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartFavoritesContext } from '../../hooks/useCartFavoritesContext'
import MenuMobile from '../MenuMobile/menumobile';


function Header() {
    const { cartCount, favoritesCount } = useCartFavoritesContext();

    // scroll
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // menu mobile

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <HeaderElement className={scrolling ? 'scrolled' : ''}>
            <Container className='grid-layout'>
                <Link to="/"><img className='img-logo' src="./icons/logo.png" alt="Logo" /></Link>

                <input className='input-search' type="search" placeholder='Pesquise o seu produto' />
                <Navigation>
                    <div className='user'>
                        <img src="./icons/user-circle-fill.svg" alt="ícone de usuário" />
                        <div className='user-text'>
                            <span>Minha conta</span>
                            <span>Entrar / Cadastro</span>
                        </div>
                    </div>

                    <ul className='menu-icons'>
                        <li className='icons'>
                            <Link to='/Favoritos' className='link'>
                                <img src="./icons/heart-fill.svg" alt="Ir para a página de favoritos" />
                                <span className='number'>{favoritesCount}</span>
                            </Link>
                        </li>
                        <li className='icons'>
                            <Link to='/Carrinho' className='link'>
                                <img src="./icons/cart-fill.svg" alt="Ir para a página de carrinho" />
                                <span className='number'>{cartCount}</span>
                            </Link>
                        </li>
                    </ul>

                    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                    <MenuMobile active={menuOpen} onClose={() => setMenuOpen(false)} />
                </Navigation>

            </Container>
            <div className="grid-layout input-mobile">
                <input className='input-search-mobile' type="search" placeholder='Pesquise o seu produto' />
            </div>
        </HeaderElement>
    );
}

export default Header;
