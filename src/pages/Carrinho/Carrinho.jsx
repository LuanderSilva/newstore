import { useEffect } from "react"
import { Menu, Container, ContentCarrinho, Produtos, ContainerFooter, FinalizarPedido } from './styles'
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

    // Função para calcular o total do carrinho
    const calcularTotalCarrinho = () => {
        let totalCentavos = 0
        cartItems.forEach(item => {
            totalCentavos += parseFloat(item.price.replace(',', '.')) * item.quantity * 100
        });
        const totalReais = totalCentavos / 100
        return totalReais.toFixed(2)
    }

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
                                    <>
                                        <ul className="list-produtos">
                                            {cartItems.map((item, index) => (
                                                <li key={index} className="list-items">
                                                    <Cards
                                                        img={item.img}
                                                        alt={item.alt}
                                                        description={item.description}
                                                        price={item.price}
                                                        discount={item.discount}
                                                        isInCartPage={true}
                                                        cartPageButton={false}
                                                        quantity={item.quantity}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <FinalizarPedido>
                                            <div className="card-finalizar">
                                                <h2 className="title-resumo">Resumo</h2>
                                                <div className="total">
                                                    <p className="text">Total</p>
                                                    <p className="value">R$ {calcularTotalCarrinho()}</p>
                                                </div>
                                            </div>
                                            <button className="button-finalizar">Finalizar Pedido</button>
                                        </FinalizarPedido>
                                    </>
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