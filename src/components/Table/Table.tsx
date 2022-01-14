import { StyledTable, Tbody, Td, Th, Thead, Tr } from "./Table.style";

export const Table = () => {
  return (
    <StyledTable>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Surnames</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>1</Td>
          <Td>Robert</Td>
          <Td>Ramos</Td>
        </Tr>
      </Tbody>
    </StyledTable>
  );
};
