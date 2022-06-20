import styled from "styled-components";

export const StyledFormEditTech = styled.form`
  width: 95%;
  max-width: 370px;
  margin: 150px auto;
  background-color: var(--grey3);
  border-radius: 4px;

  .header-form-edit-tech {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background-color: var(--grey2);
    border-radius: 4px 4px 0 0%;

    h2 {
      font-size: 12px;
    }

    button {
      border: none;
      background-color: transparent;
      color: var(--grey1);
      margin: 0;
    }
  }

  .form-inputs {
    display: flex;
    flex-direction: column;
    padding: 10px 16px;

    label {
      font-size: 10px;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    input,
    select {
      padding: 8px 12px;
      background-color: var(--grey2);
      border: var(--grey0) solid 1px;
      border-radius: 3px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .alterar,
  .delete {
    width: 60%;
    margin-top: 20px;
    background-color: var(--primary);
    border-radius: 4px;
    padding: 8px;
    border: none;
  }

  .delete {
    width: 30%;
    background-color: var(--grey1);
  }
`;
