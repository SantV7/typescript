import { useState } from "react"

const Types = () => {
    const taxJuros: number = 4.3
    const [text] = useState<string>('')
    const valorFolga: boolean = true


  return (
    <>
    <h1>Testando alguns tipos</h1>
    <p>valor da taxa: {taxJuros > 0 ? taxJuros : 'nenhuma'}</p>

    <p>{valorFolga === true ? 'Teremos folga' : 'trabahhar q nem escravo'}</p>
    

    <p>{text}</p>
    
    </>
  )
}

export default Types