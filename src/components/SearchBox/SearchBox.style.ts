import styled from "styled-components";
import { device } from "../../device"
import { FiSearch } from "react-icons/fi";

export const SearchBoxContainer = styled.div`
  position: relative;
  height: 4rem;
  margin: 0 0 2rem 0;
  width: 100%;
 
  @media ${device.tablet} {
     width: 34rem;
  }
`;

export const SearchBoxStyle = styled.input`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid #b2b2b2;
  border-radius: 0.8rem;
  padding: 0rem 0.8rem 0rem 3.4rem;
  font-weight: 400;
  color: #303030;
  font-size: 14px;
  outline: none;
`;

export const SearchInput = styled(FiSearch)`
  color: #b2b2b2;
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
