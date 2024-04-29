import { useEffect } from "react"
import { Menu, Container, ContentCarrinho, Produtos, ContainerFooter } from './styles'
import Header from '../../componentes/Header/header'
import Footer from '../../componentes/Rodape/rodape'
import Card from '../../componentes/Cards/cards'
import { Link } from "react-router-dom"

function Carrinho({ title }) {

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
                                <span className="span-title">Nenhum produto no seu carrinho.</span>
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