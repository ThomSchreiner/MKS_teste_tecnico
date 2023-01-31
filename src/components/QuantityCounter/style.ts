import styled from "styled-components";

export const StyledQuantityCounter = styled.div`
  position: relative;

  small {
    position: absolute;
    top: -10px;
    left: 0;

    font-size: 6px;
    margin-bottom: 4px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    text-align: center;

    border: 0.3px solid var(--grey-3);
    border-radius: 4px;
    font-size: 8px;

    @media (max-width: 768px) {
      width: fit-content;
      height: 22px;
    }

    button {
      padding: 0 6.5px;
      @media (max-width: 768px) {
        height: 100%;
      }
    }

    p {
      padding: 0 6.5px;
      border-left: 0.2px solid var(--grey-3);
      border-right: 0.2px solid var(--grey-3);
    }
  }
`;
