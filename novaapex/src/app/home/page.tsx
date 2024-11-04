"use client";
import Image from "next/image";
import Link from "next/link";
import Cabecalho from '@/components/Cabecalho/Cabecalho';
import Rodape from '@/components/Rodape/Rodape';
import zoe from "@/img/zoe.png";
import servicos from "@/img/servicos.png";
import ia from "@/img/ia1.png";
import meca from "@/img/mecanico.png";

export default function Home() {
  return (
    <div>
  <Cabecalho />

  <div className="apex">
    <div className="apexback">
      <h1 >NovaApex</h1>
      <p>
        Apresentamos a NovaApex, um aplicativo revolucionário feito sob medida
        para os clientes da Porto Seguro, pronto para integrar-se aos painéis
        multimídia dos mais diversos veículos. Equipado com inteligência
        artificial avançada, oferece suporte através de chat e reconhecimento de
        voz.
      </p>
      <p>Veja mais abaixo!</p>
    </div>
  </div>

  <div className="resourcesec">
    <h2>Recursos Disponíveis</h2>
    <div className="insidegrid1">
      <div className="insidegrid2">
        <Image src={zoe} alt="mulherzoe" width={70} height={50} />
        <p>
          Conheça Zoe, a sua assistente virtual no trânsito! Zoe é o cérebro
          por trás do aplicativo NovaApex da Porto Seguro. Com sua inteligência
          artificial avançada, Zoe oferece um atendimento personalizado,
          seja por texto ou voz.
        </p>
      </div>
      <div className="insidegrid2">
        <Image src={servicos} alt="engrenagem" width={70} height={50} />
        <p>
          Com a NovaApex, seu carro está sempre protegido. Ajudando a solucionar
          problemas técnicos registrando o seu carro. Sua tranquilidade ao dirigir
          é nossa prioridade absoluta. Conte conosco a cada quilômetro para uma
          jornada tranquila e segura.
        </p>
      </div>
    </div>
  </div>

  <div className="iazoesec">
    <Image src={ia} alt="ia" width={400} height={300} className="mb-4 md:mb-0 md:mr-6" />
    <div className="textparam">
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
  </div>

  <div className="mechanicsec">
    <Image src={meca} alt="mecanico" width={450} height={300} className="mb-4 md:mb-0 md:ml-6" />
    <div className="textparam">
      <h2>Agende atendimento com uma oficina parceira</h2>
      <p>
      Precisa de manutenção ou revisão no seu veículo? Conte com nossa rede de oficinas 
      parceiras para garantir um atendimento de qualidade, com profissionais especializados
      e comprometidos com a sua segurança e conforto. Nossa plataforma facilita o agendamento, 
      tornando o processo rápido e eficiente para que você possa ter seu veículo em boas
      mãos sem complicações.
      Escolha a oficina mais próxima, agende o serviço desejado no melhor
      horário para você. Estamos aqui para oferecer uma experiência prática e segura,
      mantendo seu veículo sempre em ótimo estado!
      </p>
    </div>
  </div>

  <div className="joinsec">
    <div className="joinsize">
      <h2 >Junte-se a NovaApex</h2>
      <p>
        NovaApex revoluciona a conveniência, segurança e transparência no
        mundo automotivo com tecnologia avançada. Tenha acesso rápido e
        intuitivo a serviços essenciais, diagnósticos personalizados acionados
        por inteligência artificial para soluções rápidas. Descubra como
        NovaApex transforma sua confiança ao dirigir e te prepara para uma
        nova era de proteção veicular.
      </p>
      <div className="mt-4">
        <h3>Conheça nossa equipe!</h3>
        <Link href="/equipe" className="btnequipe">
          Clique aqui
        </Link>
      </div>
    </div>
  </div>

  <Rodape />
</div>
  );
}

