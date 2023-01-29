import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;

  & > div {
    max-width: 1100px;
    margin: 0 150px;

    @media (max-width: 860px) {
      margin: 0 85px;
    }

    @media (max-width: 650px) {
      margin: 0 22px;
    }
  }
`;
