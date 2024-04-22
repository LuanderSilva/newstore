import { ContainerCard } from './styles'

function Cards() {
    return (
        <ContainerCard>
            <div className="img-product">
                <img src="./img-produtos/teclado-t-dagger.png" alt="" />
            </div>
            <div className="description-product">
                <p className='text-description'>Teclado Mecanico T-dagger Bora Preto Switch Brown, T-tgk315-br</p>
            </div>

            <div className="price-bottom">
                <div className="price-content">
                    <span className='text'>à vista</span>
                    <span className='price'>R$ 165,99</span>
                    <span className='text-bottom'>no PIX com 15% de desconto</span>
                </div>

                {/* ICONE DE CORAÇÃO */}

                <img className="icon-heart" src="./icons/heart.svg" alt="" />

            </div>
        </ContainerCard>
    )
}

export default Cards;