import styled from "styled-components";

export const StyledShimmerCard = styled.div`
  height: 306px;
  background: linear-gradient(90deg, var(--grey-1), var(--grey-3));
  background-size: 400% 400%;
  animation: bgMotion 1s ease-in-out alternate infinite;
  border-radius: 8px;

  @keyframes bgMotion {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 100%;
    }
  }
`;
