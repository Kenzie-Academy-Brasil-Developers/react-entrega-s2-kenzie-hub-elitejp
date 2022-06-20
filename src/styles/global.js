import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  list-style: none;
}
:root {
  --primary: #FF577F;
  --primary_focus: #FF427F;
  --primary_negative: #59323F;
  --sucess: #3FE864;
  --negative: #E83F5B;
  --grey4: #121214;
  --grey3: #212529;
  --grey2: #343B41;
  --grey1: #868E96;
  --grey0: #F8F9FA;
}

body {
  background: var(--grey4);
}

body, input, button, label, select {
font-family: 'Inter', sans-serif;
  color: var(--grey0);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: var(--grey0);
}

button {
  cursor: pointer;
}

a {
text-decoration:none;
}

`;
