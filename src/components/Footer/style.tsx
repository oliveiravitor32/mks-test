import styled from "styled-components";

const Container = styled.footer`
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;

  & > p {
    font-weight: 400;
    font-size: 12px;
  }
`;

export default Container;
