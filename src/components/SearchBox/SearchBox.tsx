import { useRef } from "react";

import {
  SearchBoxContainer,
  SearchBoxStyle,
  SearchInput,
} from "./SearchBox.style";

export const SearchBox = ({ filter, setFilter }: any) => {
  
  const el = useRef<HTMLInputElement>(null);
  const handleSearch = () => el.current!.focus();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.currentTarget);

  return (
    <SearchBoxContainer>
      <SearchBoxStyle
        type="text"
        placeholder="Buscar"
        ref={el}
        value={filter || ""}
        onChange={handleInputChange}
      />
      <SearchInput onClick={handleSearch} />
    </SearchBoxContainer>
  );
};
