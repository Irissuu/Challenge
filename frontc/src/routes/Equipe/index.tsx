import Rodape from '../../components/Rodape/Rodape';
import { Link } from 'react-router-dom';
import {
  GlobalStyles,
  EquipeContainer,
  EquipeContent,
  EquipeInfo,
  EquipeBtns,
  RepoBtn,
  VoltarBtn,
  Integrantes,
  Integrante,
} from '../../style/styles';


import seta from '../../img/seta.png';
import github from '../../img/github.png';
import iris from '../../img/iris.jpeg';
import tais from '../../img/tais.jpeg';

export default function Equipe() {
  return (
    <>
    <GlobalStyles />
      <EquipeContainer>
        <EquipeContent>
          <EquipeInfo>
            <h2>Nossa Equipe</h2>
            <p>
              Conheça nossa equipe, que está sempre pronta para oferecer o melhor
              serviço e suporte! A equipe do NovaApex é dedicada a transformar a
              experiência dos nossos usuários por meio da tecnologia. Abaixo, veja
              o repositório do projeto NovaApex!
            </p>

            <EquipeBtns>
              <RepoBtn href="https://github.com/Irissuu/Challenge" target="_blank">
                Repositório
              </RepoBtn>
              <VoltarBtn as={Link} to="/home">
                <img src={seta} alt="voltar" />
                Voltar
              </VoltarBtn>
            </EquipeBtns>
          </EquipeInfo>

          <Integrantes>
            <Integrante>
              <img src={iris} alt="foto da Iris" />
              <h3>Iris</h3>
              <p>Turma: 1TDSPM</p>
              <p>Rm: 557728</p>
              <div className="link">
                <a href="https://github.com/Irissuu" target="_blank">
                  <img src={github} alt="github logo" />
                </a>
              </div>
            </Integrante>
            <Integrante>
              <img src={tais} alt="foto da Taís" />
              <h3>Taís</h3>
              <p>Turma: 1TDSPM</p>
              <p>Rm: 557553</p>
              <div className="link">
                <a href="https://github.com/nyxtais" target="_blank">
                  <img src={github} alt="github logo" />
                </a>
              </div>
            </Integrante>
          </Integrantes>
        </EquipeContent>
      </EquipeContainer>
      <Rodape />
    </>
  );
}
