import { useMemo } from "react";
import { StyledTable, Tbody, Td, Th, Thead, Tr } from "./Table.style";
import MOCK_DATA from "../../MOCK_DATA.json";
import { COLUMNS } from "../../columns";

export const Table = () => {
  
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

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
