import styled from "styled-components";

const Container = styled.button`
  background-color: #ffffff;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  & > span {
    color: black;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.94px;
  }

  & > svg {
    font-size: 22px;
  }
`;

const CartIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export { Container, CartIcon };
