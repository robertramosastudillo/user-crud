import React from "react";
import { ButtonStyle, Icon } from "./Button.style";

export const Button = ({ label }: any) => {
  return (
    <ButtonStyle>
      <Icon />
      {label}
    </ButtonStyle>
  );
};
