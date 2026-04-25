import { useState } from "react"

const Types = () => {
    const taxJuros: number = 4.3
    const [text] = useState<string>('')
    const folga: boolean = true
    let testVoid: void 

    if(testVoid != undefined) {
      console.log('Test ok')
    }
    else {
      return console.log('Test completed')
    }

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