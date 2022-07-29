import styled from "styled-components";

export const Container = styled.header`
  background: var(--purple);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1rem;
    color: var(--shape);
    background-color: var(--purple-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.5rem;
    height: 3rem;

    &:hover {
      filter: brightness(90%);
      transition: filter 0.2s ease-in-out;
    }
  }
`;
