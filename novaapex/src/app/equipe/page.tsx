"use client";
import Image from "next/image";
import Link from "next/link";
import Rodape from "@/components/Rodape/Rodape";
import seta from "@/img/seta.png";
import github from "@/img/github.png";
import iris from "@/img/iris.jpeg";
import tais from "@/img/tais.jpeg";

export default function Equipe() {
  return (
    <div>
    <div className="equipe">
      <div className="equipebase">
        {/* Seção de Informações da Equipe */}
        <div className="ourequipe">
          <h2>Nossa Equipe</h2>
          <p>
            Conheça nossa equipe, que está sempre pronta para oferecer o melhor
            serviço e suporte! A equipe do NovaApex é dedicada a transformar a
            experiência dos nossos usuários por meio da tecnologia. Abaixo, veja
            o repositório do projeto NovaApex!
          </p>
          
          {/* Seção de Botões */}
          <div className="btnsequipe">
            <a href="https://github.com/Irissuu/Challenge" target="_blank" rel="noopener noreferrer" className="btnreposi">Repositório</a>
            <Link href="/home">
              <button className=" text-white px-3 py-1 rounded  flex items-center">
                <Image src={seta} alt="voltar" width={20} height={20} />
                <span className="ml-2">Voltar</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Seção de Integrantes */}
        <div className="members">
          <div className="membersec">
            <Image src={iris} alt="foto da Iris" width={120} height={120} className="membersimg" />
            <h3>Iris</h3>
            <p>Turma: 1TDSPM</p>
            <p>Rm: 557728</p>
            <div className="mt-2">
              <a href="https://github.com/Irissuu" target="_blank" rel="noopener noreferrer">
                <Image src={github} alt="github logo" width={24} height={24} />
              </a>
            </div>
          </div>

          <div className="membersec">
            <Image src={tais} alt="foto da Taís" width={120} height={120} className="membersimg" />
            <h3>Taís</h3>
            <p>Turma: 1TDSPM</p>
            <p>Rm: 557553</p>
            <div className="mt-2">
              <a href="https://github.com/nyxtais" target="_blank" rel="noopener noreferrer">
                <Image src={github} alt="github logo" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
    <Rodape />
    </div>
  );
}
