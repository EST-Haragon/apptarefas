import { useState } from "react";

export default function Calculadora(){

    return(
         <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center mb-4">Calculadora</h1>

            <input type="number"className="me-2"/>

            <input type="number"className="me-2"/>
            
            <button>Somar</button>

            <div>Resultado</div>
        </div>

    )
}