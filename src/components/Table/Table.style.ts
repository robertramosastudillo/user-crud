import styled from "styled-components";
// import { device } from "../../device"

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
  text-align: left;
  border: none;
`;

export const Thead = styled.thead`
  background-color: #f3f6f9;
  color: #464e5f;
  border-radius: 0.6rem;
`;

export const Th = styled.th`
  padding: 1.2rem;
  text-transform: uppercase;
  font-size: 1.2rem;

  &:first-of-type {
    border-radius: 0.6rem 0 0 0.6rem;
  }

  &:last-of-type {
    border-radius: 0 0.6rem 0.6rem 0;
  }
`;

export const Tr = styled.tr`
  &:hover {
    /* background-color: #f4f4f4; */
  }
`;

export const Tbody = styled.tbody`
  color: #464e5f;
  font-weight: 400;
`;

export const Td = styled.td`
  padding: 1.2rem;
`;

export const OptionsMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
