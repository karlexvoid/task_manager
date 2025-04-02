import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #04b261;
    --primary-hover: #039a54;
    --background-color: #ffffff;
    --text-color: #333333;
    --border-color: #e0e0e0;
    --hover-color: #f5f5f5;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --error-color: #ff4444;
  }

  [data-theme='dark'] {
    --primary-color: #04b261;
    --primary-hover: #039a54;
    --background-color: #1a1a1a;
    --text-color: #ffffff;
    --border-color: #333333;
    --hover-color: #2a2a2a;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --error-color: #ff4444;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    color: inherit;
  }

  input {
    font-family: inherit;
    color: inherit;
  }
`;

export default GlobalStyles;

/*
  The global styles! 

  - Sets up CSS variables for consistent theming
  - Handles both light and dark mode colors
  - Uses a nice system font stack for better readability
  - Smooth transitions between themes
  - Resets default browser styles

*/ 