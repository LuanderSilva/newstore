import { useEffect } from "react"
import { Menu, Container, ContentCarrinho, Produtos, ContainerFooter } from './styles'
import { Link } from "react-router-dom"
import { useCartFavoritesContext } from "../../hooks/useCartFavoritesContext"
import Header from '../../componentes/Header/header'
import Footer from '../../componentes/Rodape/rodape'
import Cards from '../../componentes/Cards/cards'

function Carrinho({ title }) {
    const { cartItems } = useCartFavoritesContext()

    // Titulo da página

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <>
            <Header />
            <main>
                <section className="grid-layout">
                    <Container>
                        <Menu>
                            <ul className="list-menu">
                                <li>
                                    <Link to="/">
                                        <img src="./icons/house-line.svg" alt="Página inicial" />
                                    </Link>
                                </li>
                                <li><img src="./icons/caret-right.svg" alt="" /></li>
                                <li><p>Adicionados ao Carrinho</p></li>
                            </ul>
                        </Menu>

                        <ContentCarrinho>
                            <h1 className="titleh1">Meu carrinho</h1>

                            <Produtos>
                                {cartItems.length === 0 ? (
                                    <span className="span-title">Nenhum produto no seu carrinho.</span>
                                ) : (
                                    <ul className="list-produtos">
                                        {cartItems.map((item, index) => (
                                            <li key={index}>
                                                <Cards
                                                    img={item.img}
                                                    alt={item.alt}
                                                    description={item.description}
                                                    price={item.price}
                                                    discount={item.discount}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Produtos>
                        </ContentCarrinho>
                    </Container>
                </section>
            </main >

            <ContainerFooter>
                <Footer />
            </ContainerFooter>
        </>
    )
}

export default Carrinho