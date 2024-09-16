import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  `

// Cabeçalho
export const CabecalhoContainer = styled.header`
  background-color: #9AC4E3;
  padding: 20px;
  text-align: left;
  color: white;
  font-size: 30px;
  margin-bottom: 5px;
  
  img{
    width: 70px;
    height: 70px;
    border-radius: 10px;
  }

  .loginho{
    text-align: left;
  }
`

// Menu
export const MenuContainer = styled.nav`
  display: flex;
  gap: 15px;
  font-size: 25px;
  
  p {
    margin: 0;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

// Rodapé
export const RodapeContainer = styled.footer`
  background-color: #2C7E9C;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  position: flex;
  
  p {
    color: #fff;
  }
`

//Home
export const HomeContainer = styled.div`
  background-color: #f3f3f3;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const ContPrincipal = styled.div`
  text-align: center;
  color: #fff;
  font-size: 30px;
  padding: 30px;
  background-color: #73B7D0;
  margin-bottom: 20px;
  
  h1 {
    margin-bottom: 20px;
  }
  
  p {
    color: #fff;
    font-size: 19px;
    margin-top: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
`

// Recursos
export const ResourcesSection = styled.section`
  background-color: #fdfcfc;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 40vh;
  margin-bottom: 20px;
  
`
export const IconText = styled.div`
  text-align: column;
  max-width: 400px;

  p {
    font-size: 20px;
    color: #000;

  }

  img {
    width: 100px;
    height: 100px;
  }
`

export const ResourceTitle = styled.div`
  background-color: #fdfcfc;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 5px;
  text-align: center;
  
  h2 {
    color: #436886;
  }
`


// Zoe -> 'Atendimento e Diagnóstico por IA'
export const ZoeSection = styled.section`
  background-color: #fdfcfc;
  border-radius: 25px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;


  img {
    width: 25%;
    border-radius: 25px;
  }
  
  h2 {
    color: #436886;
    text-align: center;
    font-size: 20px;
  }

  .text-ia {
    color: #000;
    text-align: center;
    font-size: 20px;
    
  }
`

// Marketing NovaApex
export const MarketingSection = styled.section`
  background-color: #73B7D0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 40px;
  }

  p {
    color: #fff;
    font-size: 20px;
    margin-top: 20px;
    max-width: 900px;

  }

  .equipe {
    margin-top: 10%;
    text-align: center;

    h3 {
      color: #fff;
      margin-bottom: 20px;
    }

    .button {
      padding: 12px 27px;
      background-color: #2C7E9C;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;

      &:hover {
        background-color: #436886;
      }
    }
  }
`

// Equipe
export const EquipeContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #73B7D0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`

export const EquipeContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  gap: 30px;
  flex-wrap: wrap;
`

export const EquipeInfo = styled.div`
  max-width: 400px;
  color: #fff;
`

// Botões equipe
export const EquipeBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`

// Botão repositório
export const RepoBtn = styled.a`
  background-color: #2C7E9C;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #436886;
  }
`

// Botão voltar
export const VoltarBtn = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`

// Integrantes
export const Integrantes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-end;
`

// Estilização cada integrante
export const Integrante = styled.div`
  background-color: #fff;
  color: #000;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 340px;
  width: 180px;
  margin: 10px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 25px;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 15px;
    font-size: 15px;
    color: #000;
  }
  .link {
    margin-top: 10px;


      img {
        width: 25px;
        height: 25px;
      }
    
  }

`

// Autentificação login e cadastro
export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #73B7D0;
`

export const AuthTitle = styled.h1`
  color: #fff;
  position: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 30px;
`

export const AuthInputBox = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0;
`

export const AuthInput = styled.input`
  width: 100%;
  padding: 25px 25px;
  border-radius: 10px;
  border: none;
`

export const AuthIcon = styled.i`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`

export const AuthButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const AuthButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color:  #2C7E9C;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #436886;
  }
`

export const AuthSwitch = styled.p`
  margin-top: 10px;
  cursor: pointer;
  color: #2C7E9C;
`

//Registrar veículo
export const VeiculoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #73B7D0;
`

export const VeiculoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`

export const VeiculoTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
  color: #436886;
`

export const VeiculoDescription = styled.p`
  text-align: center; 
  font-size: 17px;
  margin-bottom: 20px;
  color: #000;
`

export const VeiculoCadInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 15px;
  box-sizing: border-box;

`

export const ReVeiculoBtn = styled.button`
  padding: 10px 20px;
  background-color: #2C7E9C;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #436886;
  }
`

// Para interativos
export const ErrorText = styled.p`
  color: #FF0000;
  margin-bottom: 10px;
  font-size: 14px;
`

export const SuccessMessage = styled.p`
  color: #008000;
  font-size: 16px;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
  white-space: pre-line;
`


