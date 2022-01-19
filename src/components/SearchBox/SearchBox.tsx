import { useRef } from "react";

import {
  SearchBoxContainer,
  SearchBoxStyle,
  SearchInput,
} from "./SearchBox.style";

export const SearchBox = () => {
  
  const el = useRef<HTMLInputElement>(null);
  const handleSearch = () => el.current!.focus();

  return (
    <SearchBoxContainer>
      <SearchBoxStyle
        type="text"
        placeholder="Buscar"
        ref={el}

      />
      <SearchInput onClick={handleSearch} />
    </SearchBoxContainer>
  );
};
