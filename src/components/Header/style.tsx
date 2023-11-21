import styled from "styled-components";

const Container = styled.header`
  background-color: #0f52ba;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
`;

const ContainerLogo = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
  color: white;
  line-height: 19px;
  gap: 5px;
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

export { Container, ContainerLogo };
