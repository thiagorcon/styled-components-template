import { Carro } from "../Carro/Carro";
import { Botao, Estacionamento, GaragemContainer, Titulo } from "./styled";
import fuscaAmarelo from "../img/fuscaAmarelo_1280.jpg";
import fuscaPreto  from "../img/fuscaPreto_1280.jpg";
import fuscaAzul  from "../img/fuscaAzul_1280.jpg";
import fuscaVermelho  from "../img/fuscaVermelho_1280.jpg";

export function Garagem(props) {
  const imagens = {
    imagemCarroAmarelo: fuscaAmarelo,
    imagemCarroPreto: fuscaPreto,
    imagemCarroAzul: fuscaAzul,
    imagemCarroVermelho: fuscaVermelho
  };

  return (
    <GaragemContainer>
      <Titulo>Garagem da {props.nome}</Titulo>
      <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>
      <Estacionamento>
        <Carro
          imagem={imagens.imagemCarroAmarelo}
          adicionadoPor={props.nome}
          cor={"Amarelo"}
          ano={2022}
          flex={"true"}
        />
        <Carro
          imagem={imagens.imagemCarroPreto}
          adicionadoPor={props.nome}
          cor={"Preto"}
          ano={2020}
          flex={"false"}
        />
        <Carro
          imagem={imagens.imagemCarroAzul}
          adicionadoPor={props.nome}
          cor={"Azul"}
          ano={2009}
          flex={"false"}
        />
        <Carro
          imagem={imagens.imagemCarroVermelho}
          adicionadoPor={props.nome}
          cor={"Vermelho"}
          ano={2022}
          flex={"true"}
        />
      </Estacionamento>
    </GaragemContainer>
  );
}
