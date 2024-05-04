import { ContentCard, ButtonCarrinho, ContentTop } from './styles';
import { useCartFavoritesContext } from '../../hooks/useCartFavoritesContext';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function Cards({
    img,
    alt,
    description,
    price,
    discount,
    isInCartPage,
    cartPageButton = true,
    quantity
}) {
    const { addToCart, addToFavorites, removeFromCart, removeFromFavorites, favoriteItems } = useCartFavoritesContext()
    const [isFavorite, setIsFavorite] = useState(false)

    
    const handleAddToCart = () => {
        addToCart({
            img,
            alt,
            description,
            price,
            discount,
            quantity: quantity + 1
        });

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Adicionado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });
    }

    const handleRemoveOneFromCart = () => {
        removeFromCart(alt);
    };

    const handleRemoveAllFromCart = () => {
        Swal.fire({
            title: "Tem certeza?",
            text: "Você está deletando este produto do carrinho!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Sim, tenho!"
          }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(alt, true);
            }
          });
    }

    useEffect(() => {
        const isAlreadyFavorite = favoriteItems.some(item => item.alt === alt);
        setIsFavorite(isAlreadyFavorite);
    }, [favoriteItems, alt]);

    const handleAddToFavorites = () => {
        if (isFavorite) {
            removeFromFavorites(alt);
            setIsFavorite(false);
        } else {
            addToFavorites({
                img,
                alt,
                description,
                price,
                discount
            });
            setIsFavorite(true);
        }
    };

    return (
        <div>
            <ContentCard>
                <ContentTop>
                    <img className='img-product' src={img} alt={alt} />
                    {isInCartPage && (
                        <>
                            <div className="quantidade">
                                <p>Quantidade</p>
                                <div className="buttons-quant">
                                    <button className='menos-quant' onClick={quantity > 1 ? handleRemoveOneFromCart : handleRemoveAllFromCart}>-</button>
                                    <input className='input-quant' type="text" min="1" value={quantity} disabled />
                                    <button className='mais-quant' onClick={handleAddToCart}>+</button>
                                </div>
                            </div>

                            <div className="delete">
                                <img src="./icons/icon-x.svg" alt="" onClick={handleRemoveAllFromCart} />
                            </div>
                        </>
                    )}
                </ContentTop>

                <div className="description-product">
                    <p className='text-description'>{description}</p>
                </div>

                <div className="price-bottom">
                    <div className="price-content">
                        <span className='text'>à vista</span>
                        <span className='price'>R$ {price}</span>
                        <span className='text-bottom'>{discount}</span>
                    </div>

                    <img
                        className="icon-heart"
                        src={isFavorite ? "./icons/heart-fill.svg" : "./icons/heart.svg"}
                        alt="Adicionar aos Favoritos"
                        onClick={handleAddToFavorites}
                    />
                </div>
            </ContentCard >

            {cartPageButton && (
                <ButtonCarrinho>
                    <button className="button" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
                </ButtonCarrinho>
            )}
        </div >
    );
}

export default Cards
