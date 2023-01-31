import styled, { css } from "styled-components";
import { iStyledShoppingCartProps } from "./types";

export const StyledShoppingCart = styled.aside<iStyledShoppingCartProps>`
  height: 100vh;
  width: 486px;

  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--brand);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  color: var(--white);

  @media (max-width: 768px) {
    width: 85%;
    max-width: 300px;
  }

  ${({ isCartMenuOpen }) => {
    if (isCartMenuOpen) {
      return css`
        animation: abrirMenu 0.5s ease-in-out both;
      `;
    } else {
      return css`
        animation: fecharMenu 0.5s ease-in-out both;
      `;
    }
  }}

  @keyframes abrirMenu {
    0% {
      transform: translateX(110%);
      opacity: 0;
    }

    70% {
      transform: translateX(-10%);
    }

    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes fecharMenu {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }

    100% {
      transform: translateX(110%);
      opacity: 0;
    }
  }

  & > header {
    padding: 36px 60px 60px 47px;

    @media (max-width: 768px) {
      padding: 25px 46px 20px 32px;
    }

    h3 {
      font-size: 27px;
      font-weight: 700;
    }

    & > button {
      width: 38px;
      height: 38px;

      position: absolute;
      top: 36px;
      right: 22px;

      background-color: var(--black);
      color: var(--white);
      border-radius: 50%;
      font-size: 28px;

      @media (max-width: 768px) {
        top: 26px;
        right: 15px;
      }
    }
  }

  ul {
    height: calc(100vh - 173px - 139px);
    margin: 0 40px 36px 0;
    padding: 10px 20px 0 47px;

    display: flex;
    flex-direction: column;
    gap: 28px;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: #bfbfbf78;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--grey-2);
      border-radius: 20px;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: calc(100vh - 127px - 111px);
      padding: 0 46px 0 34px;
      margin-bottom: 26px;
      gap: 13px;
    }
  }

  & > footer {
    div {
      padding: 0 60px 42px 47px;

      display: flex;
      justify-content: space-between;

      font-size: 28px;
      font-weight: 700;

      @media (max-width: 768px) {
        padding: 0 46px 30px 32px;
        font-size: 26px;
      }
    }

    button {
      height: 97px;
      width: 100%;

      color: var(--white);
      background-color: var(--black);
      font-size: 28px;
      font-weight: 700;

      @media (max-width: 768px) {
        height: 65px;
        font-size: 20px;
      }
    }
  }
`;
