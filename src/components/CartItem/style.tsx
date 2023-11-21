import styled from "styled-components";

const Container = styled.section`
  display: flex;
  background-color: white;
  height: 95px;
  border-radius: 8px;
  align-items: center;
  padding: 10px;
  gap: 5px;

  & > h2 {
    font-weight: 400;
    font-size: 13px;
    width: 30%;
  }
  & > img {
    width: 20%;
  }
`;

const QuantityButtonWrapper = styled.div`
  display: flex;
  border: solid 1px #bfbfbf;
  border-radius: 8px;
  gap: 8px;
  padding: 0 5px;

  & > * {
    background-color: #ffffff;
    font-weight: 400;
    font-size: 10px;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > span {
    position: relative;
  }
  & > span:before {
    content: "";
    display: block;
    position: absolute;
    background: #bfbfbf;
    width: 0.5px;
    height: 10px;
    left: -4px;
  }
  & > span:after {
    content: "";
    display: block;
    position: absolute;
    background: #bfbfbf;
    width: 0.5px;
    height: 10px;
    right: -4px;
  }
  & > button:first-child {
    border-radius: 7px 0 0 7px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > button:last-child {
    border-radius: 0 7px 7px 0;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }
`;

const PriceAndQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  & > span {
    font-weight: 700;
    font-size: 14px;
  }
`;

export { Container, QuantityButtonWrapper, PriceAndQuantityWrapper };
