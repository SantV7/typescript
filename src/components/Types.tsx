import { useState } from "react"

const Types = () => {
    const taxJuros: number = 4.3
    const [text] = useState<string>('')
    const folga: boolean = true
    const statusCode: boolean = false

    const valorResult: null = null

    const [testNew] = useState<any>([
      {id: 1, msg1: 'Hello Word'}, 
      {id: 1, msg2: 'Hello future'}
    ])

    console.log(valorResult) 
    console.log(testNew)
    console.log(statusCode)





  return (
    <>
    <h1>Testando alguns tipos</h1>
    <p>valor da taxa: {taxJuros > 0 ? taxJuros : 'nenhuma'}</p>

    <p>{folga === true ? 'Teremos folga' : 'trabahhar q nem escravo'}</p>
    

    <p>{text}</p>
    
    </>
  )
}

export default Types