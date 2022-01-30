import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 50px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
