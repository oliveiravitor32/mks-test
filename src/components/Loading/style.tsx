import styled from "styled-components";

const Container = styled.div`
  & > svg {
    font-size: 24px;
    margin: 200px auto 0;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Container;
