import { useEffect, useMemo } from "react";
import {
  StyledTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  OptionsMenu,
} from "./Table.style";
// import MOCK_DATA from "../../MOCK_DATA.json";
import { COLUMNS } from "../../columns";
import { useTable, useGlobalFilter } from "react-table";
import { SearchBox, Button } from "..";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/user/userAction";
import { userSelector } from "../../features/user/userSelector";

export const Table = () => {
  const dispatch = useDispatch();

  const { users: data } = useSelector(userSelector);
  const columns: any = useMemo(() => COLUMNS, []);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(data);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter },
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  // const { globalFilter } = state;

  return (
    <>
      <OptionsMenu>
        <SearchBox filter={globalFilter} setFilter={setGlobalFilter} />
        <Button label="New User" />
      </OptionsMenu>
      <StyledTable {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </StyledTable>
    </>
  );
};
