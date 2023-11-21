import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 300px;
  background-color: #0f52ba;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  padding: 20px 20px 0 20px;
  z-index: 2;
`;

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  color: white;
  & > h2 {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
  & > p {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
`;

const ItemsWrapper = styled.div`
  height: 80vh;
  background-color: #0400ff;
`;

const CloseButton = styled.button``;

const FinalizePurchaseButton = styled.button`
  justify-self: flex-start;
`;

export {
  Container,
  ContainerWrapper,
  ItemsWrapper,
  FinalizePurchaseButton,
  CloseButton,
};
