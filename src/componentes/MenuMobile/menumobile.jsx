import { ContainerMenu } from './styles'
import { useEffect } from 'react'
// Header Navigation
import { Navigation } from '../Header/styles'
import { Link } from 'react-router-dom'
import { useCartFavoritesContext } from '../../hooks/useCartFavoritesContext'

function MenuMobile({ active }) {
    const { cartCount, favoritesCount } = useCartFavoritesContext();

    // Desativa o scroll da página
    useEffect(() => {
        if (active) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }

        return () => {
            document.body.classList.remove('no-scroll')
        };
    }, [active])

    return (
        <ContainerMenu $active={active}>

            <Navigation className='content'>
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
            </Navigation>
        </ContainerMenu>
    )
}

export default MenuMobile