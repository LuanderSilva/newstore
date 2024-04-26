import { useEffect } from "react"

function Carrinho({title}) {

    // Titulo da página

    useEffect(() => {
        document.title = title
    }, [title])
}

export default Carrinho