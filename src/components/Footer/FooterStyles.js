import styled from "styled-components";

export const Box = styled.div`
  background-color: #95c12b;
  width: 100%;
  color: white;
  text-align:center;
 
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto 0;
  
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
  margin: 35px 25px; 
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const Icon = styled.i`
  font-size: 30px;
  display: flex;
  justify-content: space-between;
`;

export const Social = styled.section`
width:100%;
height:100%;
`