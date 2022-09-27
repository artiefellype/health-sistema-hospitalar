import styled from "styled-components";
import { Box } from "../../types/types";

export const SBox = styled.div<Box>`
  width: ${(Box) => Box.width || `100%`};
  height: ${(Box) => Box.height};
  background-color: ${(Box) => Box.backgroundColor};
  border-radius: ${(Box) => Box.borderRadius || 10}px;
  margin: ${(Box) => Box.margin}px;
  padding: ${(Box) => Box.padding}px;
  display: flex;
  flex-direction: ${(Box) => Box.flexDirection || `row`};
  justify-content: ${(Box) => Box.justifyContent || `space-between`};
  align-items: ${(Box) => Box.alignItems || `center`};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
