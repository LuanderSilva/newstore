import Header from "./componentes/Header/header";
import SectionCarrossel from "./componentes/SectionCarrossel/sectioncarrossel";
import MaisVendidos from "./componentes/MaisVendidos/maisvendidos";
import Rodape from "./componentes/Rodape/rodape";
import { useEffect } from "react";

function Home({ title }) { 

    // Titulo da aba

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <>
            <Header />
            <main>
                <SectionCarrossel />
                <MaisVendidos />
                <Rodape />
            </main>
        </>
    )
}

export default Home;