import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, Container, ContentCarrinho, Produtos, ContainerFooter } from './styles'
import { useCartFavoritesContext } from "../../hooks/useCartFavoritesContext"
import Header from '../../componentes/Header/header'
import Footer from "../../componentes/Rodape/rodape"
import Cards from "../../componentes/Cards/cards"



function Favoritos({ title }) {
    const { favoriteItems } = useCartFavoritesContext()

    // Titulo da aba

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <>
            <Header />
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
                            <li><p>Adicionados aos Favoritos</p></li>
                        </ul>
                    </Menu>

                    <ContentCarrinho>
                        <h1 className="titleh1">Meus favoritos</h1>

                        <Produtos>
                            {favoriteItems.length === 0 ? (
                                <span className="span-title">Nenhum produto adicionado.</span>
                            ) : (
                                <ul className="list-produtos">
                                    {favoriteItems.map((item, index) => (
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

            <ContainerFooter>
                <Footer />
            </ContainerFooter>
        </>
    )
}

export default Favoritos