import { useRef } from "react";

import {
  SearchBoxContainer,
  SearchBoxStyle,
  SearchInput,
} from "./SearchBox.style";

export const SearchBox = () => {
  
  const el = useRef<HTMLInputElement>(null);
  const handleSearch = () => el.current!.focus();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  return (
    <SearchBoxContainer>
      <SearchBoxStyle
        type="text"
        placeholder="Buscar"
        ref={el}
        value={""}
        onChange={handleInputChange}
      />
      <SearchInput onClick={handleSearch} />
    </SearchBoxContainer>
  );
};
