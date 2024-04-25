import { Section, ContentCards } from "./styles"
import Cards from "../Cards/cards";
import { productsData } from '../../data/data'

function MaisVendidos() {
    return (
        <Section>
            <div className="grid-layout">
                <h1 className="s1-title">Mais vendidos</h1>

                <ContentCards>
                    {productsData.map((product, index) => (
                        <Cards
                            key={index}
                            img={product.img}
                            alt={product.alt}
                            description={product.description}
                            price={product.price}
                            discount={product.discount}
                        />
                    ))}
                </ContentCards>
            </div>
        </Section>
    )
}
export default MaisVendidos;