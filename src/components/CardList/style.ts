import styled from "styled-components";

export const StyledCardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  margin: 116px 0 50px 0;

  @media (max-width: 768px) {
    margin: 18px 0 30px 0;
  }
`;
