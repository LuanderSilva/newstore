import { useEffect } from "react"
import Header from '../../componentes/Header/header'
import Footer from "../../componentes/Rodape/rodape"
import { Link } from "react-router-dom"
import { Menu, Container, ContentCarrinho, Produtos, ContainerFooter } from './styles'


function Favoritos({ title }) {

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
                            <span className="span-title">Nenhum produto adicionado.</span>
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