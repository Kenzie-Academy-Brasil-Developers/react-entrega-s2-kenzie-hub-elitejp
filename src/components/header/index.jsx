import { StyledHeader } from "./styles";

function Header(props) {
  return (
    <StyledHeader>
      <h1>Kenzie Hub</h1>
      {props.children}
    </StyledHeader>
  );
}

export default Header;
