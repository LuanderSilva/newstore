import Header from "./componentes/Header/header";
import SectionCarrossel from "./componentes/SectionCarrossel/sectioncarrossel";
import MaisVendidos from "./componentes/MaisVendidos/maisvendidos";

function Home() {   
    return (
        <>
            <Header />
            <main>
                <SectionCarrossel />
                <MaisVendidos />
            </main>
        </>
    )
}

export default Home;