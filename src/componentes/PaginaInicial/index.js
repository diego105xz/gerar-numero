import { useState } from "react";
import './style.css';

export default function PaginaInicial(){

    const [numeroAleatorio, setNumeroAleatorio ] = useState(0);

    function Gerar(){
        const novoNumero = Math.floor(Math.random() * (100-1) + 1);
        setNumeroAleatorio(novoNumero);
    }


    return(
        <div className="card-btn">
            <h1>Número aleatório:</h1>
            <h2>{numeroAleatorio}</h2>
            <p>Click no botão para gerar um número</p>
            <button onClick={Gerar}>Gerar Núnmero</button>
        </div>
    );
}