import styled from "styled-components";
import { device } from "../../device";
import { GoPlus } from "react-icons/go";

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 14rem; /* width: 100%; */
  min-width: 12rem;
  padding: 1rem;
  font-size: 16px;
  border-radius: 0.8rem;
  height: 44px;
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
    width: 14rem;
  }
`;

export const Icon = styled(GoPlus)`
  height: 1.8rem;
  width: 1.8rem;
`;
