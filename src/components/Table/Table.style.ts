import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-radius: 0.4rem;
  border-collapse: collapse;
  box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: left;
  overflow: hidden;
  font-size: 1.4rem;

  tr:nth-child(even) {
    background-color: #f4f6fb;
  }
`;

export const Thead = styled.thead`
  box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.1);
`;

export const Th = styled.th`
    padding: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1.2rem;
    font-weight: 900;
`;

export const Tr = styled.tr``;

export const Tbody = styled.tbody``;

export const Td = styled.td`
padding: 2rem;
`;
