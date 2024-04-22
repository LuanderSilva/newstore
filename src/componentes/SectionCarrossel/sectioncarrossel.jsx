import { Section } from './styles'
import Cards from "../Cards/cards"

function SectionCarrossel() {
    return (
        <Section className="grid-layout">
            <h1 className="s1-title">Pode ser do seu interesse</h1>
            <Cards />
        </Section>
    )
}

export default SectionCarrossel