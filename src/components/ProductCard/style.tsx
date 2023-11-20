import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  gap: 8px;
  max-width: 280px;
  max-height: 300px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 2px 8px 0px #00000022;
`;

const Image = styled.img`
  max-height: 140px;
`;

const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 8px;
  & > p {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  & > span {
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    background: #373737;
    padding: 5px;
    border-radius: 5px;
    color: white;
  }
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  background: #0f52ba;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: white;
`;

export { Container, Image, ProductInfos, ContainerWrapper, BuyButton };
