import React from 'react';
import { ContentCard, ButtonCarrinho } from './styles';
import { useCartFavoritesContext } from '../../hooks/useCartFavoritesContext';

function Cards({ img, alt, description, price, discount }) {
    const { addToCart, addToFavorites } = useCartFavoritesContext();

    const handleAddToCart = () => {
        addToCart({
            img,
            alt,
            description,
            price,
            discount
        });
    };

    const handleAddToFavorites = () => {
        addToFavorites({
            img,
            alt,
            description,
            price,
            discount
        });
    };

    return (
        <div>
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

                    <img className="icon-heart" src="./icons/heart.svg" alt="Adicionar aos Favoritos" onClick={handleAddToFavorites}/>
                </div>
            </ContentCard>

            <ButtonCarrinho>
                <button className="button" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
            </ButtonCarrinho>
        </div>
    );
}

export default Cards;
