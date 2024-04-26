import { useEffect } from "react"

function Favoritos({title}) {

    // Titulo da aba

    useEffect(() => {
        document.title = title
    }, [title])
}

export default Favoritos