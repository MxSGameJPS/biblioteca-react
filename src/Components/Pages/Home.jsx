import styled from "styled-components";
import Botao from "../botão";
import Card, { Card2, CardHorizontal } from "../card";

export default function Home() {
  return (
    <>
      <DivBotoes>
        <Botao
          titulo="Clique aqui"
          onClick={() => alert("Clicou")}
          cor="red"
          letra="white"
        >
          Clique aqui
        </Botao>
        <Botao
          titulo="Clique aqui"
          onClick={() => alert("Clicou")}
          cor="black"
          letra="white"
        >
          Clique aqui
        </Botao>
        <Botao
          titulo="Clique aqui"
          onClick={() => alert("Clicou")}
          cor="blue"
          letra="white"
        >
          Clique aqui
        </Botao>
        <Botao
          titulo="Clique aqui"
          onClick={() => alert("Clicou")}
          cor="yellow"
          letra="black"
        >
          Clique aqui
        </Botao>
      </DivBotoes>
      <DivCards>
        <Card
          titulo="Card 1"
          descricao="Descrição do card 1"
          imagem="https://via.placeholder.com/150"
          cor="#ff0013"
          fundo="linear-gradient(to right, #000, #001243)"
        />
        <Card
          titulo="Card 2"
          descricao="Descrição do card 2"
          imagem="https://via.placeholder.com/150"
          cor="#fff"
          fundo="linear-gradient(to right, #000, #002919)"
        />
        <Card
          titulo="Card 3"
          descricao="Descrição do card 3"
          imagem="https://via.placeholder.com/150"
          cor="#ff29bb"
          fundo="linear-gradient(to right, #000, #DFDF2BFF)"
        />
      </DivCards>
      <DivCardsHorizontal>
        <CardHorizontal
          titulo="Card 1"
          descricao="Este é um card horizontal"
          imagem="https://via.placeholder.com/150"
          cor="#ff0013"
          fundo="linear-gradient(to right, #000, #001243)"
        />
        <CardHorizontal
          titulo="Card 2"
          descricao="Descrição do card 2"
          imagem="https://via.placeholder.com/150"
          cor="#ff0013"
          fundo="linear-gradient(to right, #000, #21DB94FF)"
        />
        <CardHorizontal
          titulo="Card 3"
          descricao="Descrição do card 3"
          imagem="https://via.placeholder.com/150"
          cor="#ff29bb"
          fundo="linear-gradient(to right, #000, #292919)"
        />
      </DivCardsHorizontal>
      <DivCards2>
        <Card2
          titulo="Card 1"
          descricao="Descrição do card 1"
          imagem="https://via.placeholder.com/150"
          cor="#ff0013"
          fundo="linear-gradient(to right, #000, #001243)"
        />
      </DivCards2>
    </>
  );
}

const DivCards2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
`;

const DivBotoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
`;

const DivCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
`;

const DivCardsHorizontal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
`;
