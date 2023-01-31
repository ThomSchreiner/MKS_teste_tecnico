import styled from "styled-components";

export const StyledShoppingCart = styled.li`
  padding: 19px 20px;

  position: relative;

  display: flex;
  align-items: center;
  gap: 15px;

  background-color: var(--white);
  color: var(--black);
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 15px 18px;
    flex-direction: column;
    gap: 12px;
  }

  figure {
    max-height: 61px;
    max-width: 61px;

    @media (max-width: 768px) {
      max-height: 95px;
      max-width: 95px;
    }

    img {
      max-height: 100%;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 auto;

    @media (max-width: 768px) {
      width: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 11px;
      grid-column-gap: 4px;
    }

    h2 {
      font-size: 13px;
      font-weight: 400;
      flex: 1 1 auto;

      @media (max-width: 768px) {
        display: grid;
        grid-column-start: 1;
        grid-column-end: 3;

        text-align: center;
      }
    }

    & > div {
      margin-left: 9px;

      @media (max-width: 768px) {
        margin-left: unset;
      }
    }

    span {
      font-size: 14px;
      font-weight: 700;
      margin-left: 30px;

      @media (max-width: 768px) {
        margin-left: unset;
        text-align: end;
      }
    }
  }

  & > button {
    width: 18px;
    height: 18px;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, -40%);

    background-color: var(--black);
    color: var(--white);
    border-radius: 50%;
    font-size: 11px;

    @media (max-width: 768px) {
      top: 5px;
      right: 5px;
      transform: unset;
    }
  }
`;
