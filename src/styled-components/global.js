import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: "Nunito Sans", sans-serif;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  transition: background-color 200ms linear;
}

.header {
  background-color: ${({ theme }) => theme.componentColors};
}

.search__cont {
  background-color: ${({ theme }) => theme.componentColors};
}

.search__input::placeholder {
  color: ${({ theme }) => theme.text};
}
.search__filter {
  background-color: ${({ theme }) => theme.componentColors};
}
.custom-select .custom-select__icon  {
  background-color: ${({ theme }) => theme.componentColors};
}
.flag {
  background-color: ${({ theme }) => theme.componentColors};
  color: ${({ theme }) => theme.text};
}
.back-route {
  background-color: ${({ theme }) => theme.componentColors};
}
.details {
  color: ${({ theme }) => theme.text};
}

.loader {
  background-color: ${({ theme }) => (theme === darkTheme ? lightTheme.body : darkTheme.body)};
}
`;
