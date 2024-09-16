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

