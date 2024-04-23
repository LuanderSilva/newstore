import { Section } from './styles'
import Cards from "../Cards/cards"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
                        <Cards 
                            img = "./img-produtos/teclado-t-dagger.png"
                            alt = "Teclado T-Dagger"
                            description= "Teclado Gamer Mecânico T-Dagger Bora, Switch Brown, RGB, Black, ABNT2"
                            price = "165,99"
                            discount = "no PIX com 15% de desconto"
                        />

                        <Cards 
                             img = "./img-produtos/teclado-redragon.jpg"
                             alt = "Teclado Redragon"
                             description= "Teclado Mecânico Gamer Redragon Kala Lunar RGB, Switch Blue, ABNT-2, White"
                             price = "259,90"
                             discount = "no PIX com 15% de desconto"
                        />
                        <Cards 
                            img = "./img-produtos/gabinete-white-Montech.png"
                            alt = "Gabinete Gamer Montech x3 MESH"
                            description= "Gabinete Gamer Montech x3 MESH, Mid Tower, White, ATX, Com 6 Fans Rainbow, Vidro Temperado, X3 MESH"
                            price = "239,90"
                            discount = "12x de R$ 23,52 sem juros"
                        />
                        <Cards 
                            img = "./img-produtos/gabinete-gamer-ninja.png"
                            alt = "Gabinete Gamer Ninja Apolo"
                            description= "Gabinete Gamer Ninja Apolo, Mid Tower, RGB, mATX, Black, Sem Fonte, Com 3 Fans"
                            price = "159,90"
                            discount = "9x de R$ 20,90 sem juros"
                        />
                        <Cards 
                            img = "./img-produtos/monitor-gamer.jpg"
                            alt = "Monitor Gamer SuperFrame"
                            description= "Monitor Gamer SuperFrame Precision, 27 Pol, Curvo, Full HD, 1ms, 240Hz, FreeSync, HDMI/DP, SFP2702G"
                            price = "999,90"
                            discount = "12x de R$ 98,03 sem juros"
                        />
                        <Cards 
                            img = "./img-produtos/mouse-black.jpg"
                            alt = "Mouse Gamer Razer Cobra"
                            description= "Mouse Gamer Razer Cobra, RGB, 6 Botões Programáveis, 8.500 DPI, Black, RZ0104650100R3U"
                            price = "339,90"
                            discount = "12x de R$ 33,32 sem juros"
                        />
                    </Slider>
                </div>
            </div>
        </Section>
    )
}

export default SectionCarrossel