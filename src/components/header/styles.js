import styled from "styled-components";

export const StyledHeader = styled.div`
  margin: 10px auto;
  display: flex;
  width: 95%;
  max-width: 370px;
  justify-content: space-between;

  h1 {
    color: var(--primary_focus);
  }

  button {
    background-color: var(--grey3);
    padding: 0 15px;
    border-radius: 4px;
    border: none;
  }
`;
