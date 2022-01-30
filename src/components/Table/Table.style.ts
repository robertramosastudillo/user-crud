import styled from "styled-components";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

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

// Paginations Options

export const PaginationOptions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const FirstAndLastPage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border: none;
  background-color: #f3f6f9;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  color: #464e5f;
  cursor: pointer;
  &:hover {
    background-color: #d3d3d3;
  }
`;

export const FirstPageIcon = styled(BsArrowBarLeft)`
  height: 2rem;
  width: 2rem;
  color: #464e5f;
`;

export const LastPageIcon = styled(BsArrowBarRight)`
  height: 2rem;
  width: 2rem;
  color: #464e5f;
`;

export const TextPage = styled.span`
  display: flex;
  flex-direction: row;
  color: #464e5f;
`;

export const TextPageStrong = styled.strong`
  display: flex;
  flex-direction: row;
  min-width: 4.2rem;
  margin: 0 0 0 .4rem;
`;

export const GoToPageStyle = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 16.6rem;
  color: #464e5f;
`;

export const SearchBoxPageStyle = styled.input`
  width: 100%;
  height: 3.2rem;
  background-color: #ffffff;
  border: 1px solid #b2b2b2;
  border-radius: 0.6rem;
  padding: 0.4rem 0.8rem;
  font-weight: 400;
  color: #303030;
  font-size: 14px;
  outline: none;
  text-align: center;
  margin: 0 0 0 .4rem;

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
