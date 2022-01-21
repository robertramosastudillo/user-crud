import styled from "styled-components";
import { device } from "../../device";
// import { FiSearch } from "react-icons/fi";

export const ButtonStyle = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  border-radius: 0.8rem;
  height: 45px;
  font-weight: bold;
  background-color: steelblue;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 0 2rem 0;

  &:hover {
    background-color: #4a87ba;
    box-shadow: 0px 0px 16px #4a87ba;
  }

  @media ${device.tablet} {
    width: 20rem;
  }
`;
