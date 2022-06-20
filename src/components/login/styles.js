import styled from "styled-components";

export const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  margin: 12px;
  padding: 16px;
  background-color: var(--grey3);
  gap: 20px;
  border-radius: 4px;

  h2,
  p {
    text-align: center;
  }

  label {
    font-size: 12px;
    font-weight: 400;
  }

  span {
    color: var(--negative);
    font-size: 10px;
  }

  p {
    font-size: 10px;
    color: var(--grey1);
  }

  input {
    padding: 8px 12px;
    background-color: var(--grey2);
    border: var(--grey0) solid 1px;
    border-radius: 3px;
  }

  .login {
    background-color: var(--primary);
    border-radius: 4px;
    padding: 8px;
  }

  .register {
    background-color: var(--grey1);
    border-radius: 4px;
    padding: 8px;
  }
`;
