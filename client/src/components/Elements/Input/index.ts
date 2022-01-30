import styled from "styled-components";

type Props = {
  inputSize?: "small" | "medium" | "large";
};

export const Input = styled.input<Props>`
  font-size: ${(props) =>
    props.inputSize === "medium"
      ? "1.5em"
      : props.inputSize === "large"
      ? "3em"
      : "1em"};
  padding: 0.25em 0.5em;
  border-radius: 1px;
  @media (max-width: 600px) {
    font-size: 1em;
  }
`;
