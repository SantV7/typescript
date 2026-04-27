import { useState } from "react"

const Types = () => {
    const taxJuros: number = 4.3
    const [text] = useState<string>('')
    const folga: boolean = true
    const statusCode: boolean = false

    let idade:number = 18

    const valorResult: null = null

    const [testNew] = useState<any>([
      {id: 1, msg1: 'Hello Word'}, 
      {id: 1, msg2: 'Hello future'}
    ])

    console.log(valorResult) 
    console.log(testNew)
    console.log(statusCode)
    if(idade >= 18) {
      console.log('Aquele garoto já virou um adulto...')
    } else {
      console.log('Deve estar vivendo a melhor fase da sua vida, a mais feliz, mas vc só vai notar isso quando acabar - Vy')
    }



  return (
    <>
      <h1>Testando alguns tipos</h1>
      <p>valor da taxa: {taxJuros > 0 ? taxJuros : 'nenhuma'}</p>

      <p>{ folga === true ? 'Teremos folga' : 'trabahhar q nem escravo' }</p>
    

    <p>{text}</p>
    
    </>
  )
}

export default Types