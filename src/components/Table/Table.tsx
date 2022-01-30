import { useEffect, useMemo } from "react";
import {
  StyledTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  OptionsMenu,
  PaginationOptions,
  FirstAndLastPage,
  FirstPageIcon,
  LastPageIcon,
  TextPage,
  SearchBoxPageStyle,
  TextPageStrong,
} from "./Table.style";
// import MOCK_DATA from "../../MOCK_DATA.json";
import { COLUMNS } from "../../columns";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { SearchBox, Button } from "..";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/user/userAction";
import { userSelector } from "../../features/user/userSelector";
import { GoToPageStyle } from "./Table.style";

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
    // rows,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter, pageIndex, pageSize },
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    usePagination
  );

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
          {page.map((row) => {
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
      <PaginationOptions>
        <FirstAndLastPage
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <FirstPageIcon />
        </FirstAndLastPage>{" "}
        <FirstAndLastPage
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </FirstAndLastPage>{" "}
        <FirstAndLastPage onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </FirstAndLastPage>{" "}
        <FirstAndLastPage
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <LastPageIcon />
        </FirstAndLastPage>{" "}
        <TextPage>
          Page {"  "}
          <TextPageStrong>
            {pageIndex + 1} of {pageOptions.length}
          </TextPageStrong>
        </TextPage>
        <GoToPageStyle>
          | Go to page:
          <SearchBoxPageStyle
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "60px" }}
          />
        </GoToPageStyle>
        {/* <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
      </PaginationOptions>
    </>
  );
};
