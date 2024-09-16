import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

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