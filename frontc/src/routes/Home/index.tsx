import { Link } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho.tsx';
import Rodape from '../../components/Rodape/Rodape.tsx';
import {
  GlobalStyles,
  HomeContainer,
  ContPrincipal,
  ResourceTitle,
  ResourcesSection,
  IconText,
  ZoeSection,
  MarketingSection,

} from '../../style/styles.ts';

import zoe from '../../img/zoe.png';
import servicos from '../../img/servicos.png';
import ia from '../../img/ia.png';

export default function Home() {
  return (
    <>

    <GlobalStyles />
    <Cabecalho />
    <HomeContainer>
      <ContPrincipal>
        <h1>NovaApex</h1>
        <p>
          Apresentamos a NovaApex, um aplicativo revolucionário feito sob medida
          para os clientes da Porto Seguro, pronto para integrar-se aos painéis
          multimídia dos mais diversos veículos. Equipado com inteligência
          artificial avançada, oferece suporte através de chat e reconhecimento de
          voz.
        </p>
        <p>Veja mais abaixo!</p>
      </ContPrincipal>

      <ResourceTitle id="recursos">
        <h2>Recursos Disponíveis</h2>
      </ResourceTitle>

      <ResourcesSection className="recursosdisponiveis">
        <IconText>
          <img src={zoe} alt="mulherzoe" className='imgresource' />
          

            <p>
              Conheça Zoe, a sua assistente virtual no trânsito! Zoe é o cérebro
              por trás do aplicativo NovaApex da Porto Seguro. Com sua inteligência
              artificial avançada, Zoe oferece um atendimento personalizado,
              seja por texto ou voz.
            </p>
         
        </IconText>
        <IconText>
          <img src={servicos} alt="engrenagem" className='imgresource' />
          

            <p>
              Com a NovaApex, seu carro está sempre protegido. Ajudando a solucionar
              problemas técnicos registrando o seu carro. Sua tranquilidade ao dirigir
              é nossa prioridade absoluta. Conte conosco a cada quilômetro para uma
              jornada tranquila e segura.
            </p>

        </IconText>
      </ResourcesSection>

      <ZoeSection id="Zoe">
        <img src={ia} alt="ia" />
        <div className="text-ia">
          <h2>Atendimento e Diagnóstico por IA</h2>
          <p>
            Zoe é uma assistente virtual revolucionária para diagnóstico de
            problemas automotivos. Com inteligência artificial avançada, ela
            guia os usuários por perguntas inteligentes para identificar e
            sugerir soluções para problemas no veículo. Garantindo conveniência
            e eficiência no cuidado com os veículos. Atualizada e adaptável, Zoe
            economiza tempo e dinheiro, oferecendo uma solução completa para as
            necessidades dos usuários.
          </p>
        </div>
      </ZoeSection>

      <MarketingSection id="marketing">
        <div className="text-marketing">
          <h2>Junte-se a NovaApex</h2>
          <p>
            NovaApex revoluciona a conveniência, segurança e transparência no
            mundo automotivo com tecnologia avançada. Tenha acesso rápido e
            intuitivo a serviços essenciais, diagnósticos personalizados acionada
            por inteligência artificial para soluções rápidas. Descubra como
            NovaApex transforma sua confiança ao dirigir e te prepara para uma
            nova era de proteção veicular.
          </p>
          <div className="equipe">
            <h3>Conheça nossa equipe!</h3>
            <Link to="/equipe" className="button">Clique aqui</Link>
          </div>
        </div>
      </MarketingSection>



    </HomeContainer>
    <Rodape />
    </>
  );
}
