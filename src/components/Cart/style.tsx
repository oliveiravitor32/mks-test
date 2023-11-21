import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 380px;
  background-color: #0f52ba;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  padding-top: 10px;
  z-index: 2;
  gap: 8px;
`;

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  color: white;
  padding: 0 20px;

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
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  padding: 30px 20px;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  color: white;
  background-color: black;
`;

const FinalizePurchaseButton = styled.button`
  font-size: 28px;
  font-weight: 700;
  color: white;
  background-color: black;
  border: none;
  justify-self: flex-start;
  cursor: pointer;
  padding: 20px 0;
`;

export {
  Container,
  ContainerWrapper,
  ItemsWrapper,
  FinalizePurchaseButton,
  CloseButton,
};
