import styled from "styled-components";

export const StyledRegister = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  margin: 12px auto;
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

  input,
  select {
    padding: 8px 12px;
    background-color: var(--grey2);
    border: var(--grey0) solid 1px;
    border-radius: 3px;
  }

  option {
    width: 10px;
  }

  button {
    background-color: var(--primary);
    border-radius: 4px;
    padding: 8px;
  }
`;
