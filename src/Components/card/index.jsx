import styled from "styled-components"
import Botao from "../botão"
import { useState } from "react";

export default function Card({titulo, descricao, imagem, cor, fundo}) {
    return (
        <DivCard style={{background: fundo}}>
            <h1 style={{color: cor}}>{titulo}</h1>
            <p style={{color: cor}}>{descricao}</p>
            <DivImagem>
                <img src={imagem} alt={titulo} />
            </DivImagem>            
        </DivCard>
    )
}

export function CardHorizontal({titulo, descricao, imagem, cor, fundo}) {
    return (
        <>
        <DivCardHorizontal style={{background: fundo}}>
            <h1 style={{color: cor}}>{titulo}</h1>
            <p style={{color: cor}}>{descricao}</p>
            <DivCardHorizontalImagem>
                <img src={imagem} alt={titulo} />
            </DivCardHorizontalImagem>
            <Botao titulo="Clique aqui" cor={cor} fundo={fundo}></Botao>
        </DivCardHorizontal>
        
        </>
    )
}

export function Card2({titulo, cor, fundo}) {
    const [contador, setContador] = useState(0);
    console.log(contador);
    return (
        <DivCardHorizontal2 style={{background: fundo}}>
            <h1 style={{color: cor}}>{titulo}</h1>
            <p style={{color: cor}}>{contador}</p>
            
            <Botao titulo="Clique aqui" cor={cor} fundo={fundo} onClick={() => setContador(contador + 1)}></Botao>
        </DivCardHorizontal2>
    )
}

const DivCardHorizontal2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 200px;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    gap: 10px;
`

const DivCardHorizontal = styled.div`
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 200px;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    gap: 10px;
`

const DivCardHorizontalImagem = styled.div`
    width: 50%;
    height: 35%;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    top: 5%;
    right: 3%;
`

const DivCard = styled.div`
    width: 200px;
    height: 300px;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;  
`

const DivImagem = styled.div`
    width: 100%;
    height: 60%;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
`
