import styled, { keyframes } from "styled-components";

const timer = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0;
  }
`;

export const StyledRegisterModal = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: var(--grey2);
  border-radius: 4px;

  .info {
    padding: 15px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h2 {
    font-size: 14px;
  }

  .timer {
    animation-name: ${timer};
    height: 6px;
    border-radius: 0 0 4px 4px;
    background-color: var(--sucess);
    transition-duration: 4s;
  }
`;

export const StyledErrorModal = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: var(--grey2);
  border-radius: 4px;

  .info {
    padding: 15px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  h2 {
    font-size: 14px;
  }

  .timer {
    animation-name: ${timer};
    height: 6px;
    border-radius: 0 0 4px 4px;
    background-color: var(--negative);
    transition-duration: 4s;
  }
`;

export const StyledCreateTechModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
`;
