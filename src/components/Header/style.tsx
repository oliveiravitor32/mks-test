import styled from "styled-components";

const Container = styled.header`
  background-color: #0f52ba;
  height: 100px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerLogo = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
  color: white;
  line-height: 19px;
  h1 {
    font-weight: 600;
    font-size: 40;
  }
  p {
    font-weight: 300;
    font-size: 20;
    align-self: flex-end;
  }
`;

const CountCartItems = styled.button`
  background-color: white;
  width: 100px;
  height: 45px;
  border-radius: 8px;
  border: none;
`;

export { Container, ContainerLogo, CountCartItems };
