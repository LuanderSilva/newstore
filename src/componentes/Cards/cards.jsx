import { ContentCard, Container } from './styles'

function Cards({img, alt, description, price, discount}) {
    return (
        <Container>
            <ContentCard>
                <div className="img-product">
                    <img src={img} alt={alt} />
                </div>
                <div className="description-product">
                    <p className='text-description'>{description}</p>
                </div>

                <div className="price-bottom">
                    <div className="price-content">
                        <span className='text'>à vista</span>
                        <span className='price'>R$ {price}</span>
                        <span className='text-bottom'>{discount}</span>
                    </div>

                    {/* ICONE DE CORAÇÃO */}

                    <img className="icon-heart" src="./icons/heart.svg" alt="" />

                </div>
            </ContentCard>

            <button className="button">Adicionar ao Carrinho</button>
        </Container>
    )
}

export default Cards;