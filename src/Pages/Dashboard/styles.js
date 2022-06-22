import styled from "styled-components";

export const StyledDashboard = styled.div`
  margin: 10px auto;
  border-radius: 4px;
  max-width: 780px;

  hr {
    margin: 32px 0;
    background-color: var(--grey1);
    height: 1px;
    border: none;
  }

  h2,
  p,
  .techs {
    margin: auto;
    width: 95%;
    max-width: 780px;
  }

  p {
    margin-top: 10px;
    font-size: 12px;
    color: var(--grey1);
  }

  .techs {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      font-size: 20px;
      width: 32px;
      height: 32px;
      background-color: var(--grey3);
      border: none;
      border-radius: 4px;
    }
  }

  .mobile-tip {
    margin: 0 2.5%;
    color: var(--grey1);
    font-size: 12px;
  }

  @media screen and (min-width: 900px) {
    .mobile-tip {
      display: none;
    }
  }
`;
