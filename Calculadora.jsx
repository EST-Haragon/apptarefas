import { useState } from "react";

export default function Calculadora(){
    const [primeiro, setPrimeiro] = useState('')
    const [segundo, setSegundo] = useState('')
    const [resultado, setResultado] = useState(null)

    console.log(primeiro,segundo)
        const somar= ()=>{
          const soma = Number(primeiro) + Number (segundo)
            setResultado(soma)
            //realizar a soma de primeiro + segundo
            //atribuir ao resultado
        }
    return(
         <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center mb-4">Calculadora</h1>

            <input 
            type="number"
            className="me-2" 
            value={primeiro}
            onChange={(e) => setPrimeiro(e.target.value)}
            style={{borderRadius:30 }}
            />

            <input 
            type="number"
            className="me-2" 
            value={segundo}
            onChange={(e)=> setSegundo(e.target.value)}
            style={{borderRadius:30 }}
            />

            <button onClick={somar}
            className="btn btn-dark"
            >Somar</button>

            <div
            className="badge text-bg-secondary text-wrap"
            >Resultado: {resultado !== null ? resultado : "--"}</div>
        </div>

    )
}