import styled from "styled-components";

type Props = {
  size?: "small" | "medium" | "large";
};

export const Button = styled.button<Props>`
  background: white;
  color: #1b74e4;
  font-size: ${(props) =>
    props.size === "medium" ? "1.5em" : props.size === "large" ? "3em" : "1em"};
  padding: 0.25em 1em;
  border: ${(props) => (props.size === "small" ? "1px" : "2px")} solid #1b74e4;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #89addb;
    border: ${(props) => (props.size === "small" ? "1px" : "2px")} solid #89addb;
  }
  @media (max-width: 600px) {
    font-size: 1em;
  }
`;
