import styled from "styled-components";

export const StyledCard = styled.li`
  width: 218px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 502px) {
    width: 250px;
  }

  figure {
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 140px;
    }
  }

  & > div {
    padding: 12px 12px 12px 14px;
    color: var(--grey-1);

    div {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 4px;
      margin-bottom: 8px;

      h2 {
        height: 40px;
        font-size: 16px;
        font-weight: 400;
        overflow: hidden;
      }

      span {
        color: var(--white);
        background-color: var(--grey-2);
        font-size: 15px;
        font-weight: 700;
        border-radius: 5px;
        padding: 4px 8px;
      }
    }

    p {
      font-size: 10px;
      font-weight: 300;
    }
  }

  button {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    color: var(--white);
    background-color: var(--brand);
    border-radius: 0px 0px 8px 8px;
  }
`;
