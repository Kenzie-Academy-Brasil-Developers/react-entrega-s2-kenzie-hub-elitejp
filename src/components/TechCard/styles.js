import styled from "styled-components";

export const StyledTechCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: var(--grey4);
  border-radius: 4px;
  border: none;

  h2 {
    font-size: 14px;
  }

  p {
    font-size: 12px;
    color: var(--grey1);
  }
`;
