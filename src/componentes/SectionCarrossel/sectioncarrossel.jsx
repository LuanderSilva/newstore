import { Section } from './styles'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productCarouselData } from '../../data/data'
import Cards from '../Cards/cards';


function SectionCarrossel() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    return (
        <Section>
            <div className="grid-layout">
                <h1 className="s1-title">Pode ser do seu interesse</h1>

                <div className="slider-container">
                    <Slider {...settings}>
                        {productCarouselData.map((product, index) => (
                            <Cards
                                key={index}
                                img={product.img}
                                alt={product.alt}
                                description={product.description}
                                price={product.price}
                                discount={product.discount}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </Section>
    )
}

export default SectionCarrossel