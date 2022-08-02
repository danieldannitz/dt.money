import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --purple: #5429cc;
    --purple-light: #6933ff;
    --green: #33cc95;
    --red: #e52e4d;
    --shape: #ffffff;
    --text-title: #363f5f;
    --text-body: #969cb2;
    --background: #f0f2f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  html {
    @media (max-width: 1080px) {
      font-size: 0.9375rem; //93.75% //15px
    }

    @media (max-width: 720px) {
      font-size: 0.875rem; //87.5% //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0 ,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .react-modal-content {
    width: 100%;
    max-width: 36rem;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
`;
