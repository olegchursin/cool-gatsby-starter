import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: ${(props: any) => props.theme.colors.background};
    color: ${(props: any) => props.theme.colors.darkGray};;
  }
`;

export { GlobalStyles };
