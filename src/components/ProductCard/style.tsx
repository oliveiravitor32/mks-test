import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  max-width: 218px;
  max-height: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 2px 8px 0px #00000022;
`;

const Image = styled.img`
  max-height: 138px;
`;

const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  gap: 4px;
  & > p {
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
  justify-content: space-between;
  & > h2 {
    text-align: left;
    word-wrap: break-word;
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
  padding: 6.8px 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2px;
  & > svg {
    font-size: 18px;
  }
`;

export { Container, Image, ProductInfos, ContainerWrapper, BuyButton };
