"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Oficinas() {
  const [servico, setServico] = useState("");
  const [oficina, setOficina] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (servico && oficina && data && hora) {
      setSuccess(true);
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    }
  };

  const oficinas = [
    { nome: "Oficina do Pessoal", endereco: "Rua das Flores, 123, Centro", cnpj: "12345678000101", telefone: "98765-4321" },
    { nome: "Mecânica Paulista", endereco: "Av. Paulista, 163, Bela Vista", cnpj: "98765432000109", telefone: "91234-5678" },
    { nome: "Auto Peças da Vila", endereco: "Rua Macedo Carvalho, 209, Vila Mariana", cnpj: "12398765000199", telefone: "98765-4322" },
    { nome: "Oficina do Câmbio", endereco: "Rua Pinheiros, 1232, Vila Julaiana", cnpj: "56789012000134", telefone: "92345-6789" },
    { nome: "Manutenção Rápida", endereco: "Rua Gaivota, 198, Moema", cnpj: "90876543000156", telefone: "91122-3344" },
  ];

  return (
    <div className="oficinas">
      <div className="oficinasbase">
        
        <div className="agendarbase">
          <h2>Agendar Serviço</h2>
          <form onSubmit={handleSubmit}>
            {success && <p className="text-green-600 text-center mb-4">Agendamento realizado com sucesso!</p>}
            <div>
              <label>Serviço</label>
              <input
                type="text"
                placeholder="Serviço"
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                className="inputagen"
                required
              />
            </div>
            <div>
              <select
                value={oficina}
                onChange={(e) => setOficina(e.target.value)}
                className="inputagen"
                required
              >
                <option value="">Selecione a oficina</option>
                {oficinas.map((oficina, index) => (
                  <option key={index} value={oficina.nome}>
                    {oficina.nome}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="inputagen"
                required
              />
            </div>
            <div>
              <input
                type="time"
                min="08:00"
                max="19:00"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="inputagen"
                required
              />
            </div>
            <button type="submit" className="btnagendamento">
              Confirmar Agendamento
            </button>
          </form>

          <div className="mt-4 flex justify-center">
            <Link href="/home" className="btnvoltaragen">
              Voltar
            </Link>
          </div>
        </div>

        <div className="oficinasdispo">
          <h2>Oficinas Disponíveis</h2>
          <div className="space-y-4">
            {oficinas.map((oficina, index) => (
              <div key={index} className="oficinasdispokey">
                <h3>{oficina.nome}</h3>
                <p>{oficina.endereco}</p>
                <p>CNPJ: {oficina.cnpj}</p>
                <p>Telefone: {oficina.telefone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
