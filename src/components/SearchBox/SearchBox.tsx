import { useRef, useState } from "react";
import { useAsyncDebounce } from "react-table";

import {
  SearchBoxContainer,
  SearchBoxStyle,
  SearchInput,
} from "./SearchBox.style";

export const SearchBox = ({ filter, setFilter }: any) => {
  const el = useRef<HTMLInputElement>(null);
  const handleSearch = () => el.current!.focus();
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value: string) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <SearchBoxContainer>
      <SearchBoxStyle
        type="text"
        placeholder="Buscar"
        ref={el}
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      <SearchInput onClick={handleSearch} />
    </SearchBoxContainer>
  );
};
