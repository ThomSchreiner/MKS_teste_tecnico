import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--brand);
  height: 101px;
  padding: 0 70px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 48px;
    padding: 0 22px;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      color: var(--white);
      display: flex;
      align-items: baseline;
      gap: 6px;

      p {
        font-size: 2.5rem;
        font-weight: 600;

        @media (max-width: 768px) {
          font-size: 2rem;
        }
      }

      p + p {
        font-size: 1.25rem;
        font-weight: 300;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }

    button {
      background-color: var(--white);
      padding: 10px 15px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 16px;

      @media (max-width: 768px) {
        padding: 5px 10px;
        gap: 10px;

        img {
          width: 11px;
        }
      }

      span {
        font-size: 18px;
        font-weight: 700;

        @media (max-width: 768px) {
          font-size: 12px;
        }
      }
    }
  }
`;
