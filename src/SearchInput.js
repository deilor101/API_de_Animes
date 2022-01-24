import React, {useState} from "react";
import useDebounce from "./useDebounce";

const SearchInput = ({ value, onChange }) => {
  const [setDisplayValue] = useState(value);  
  const debouncedChange = useDebounce(onChange, 500)
  function handleChange(event) {
    setDisplayValue(event.target.value);  
    debouncedChange(event.target.value);
  }
  return (
    <input
      type="search"
      placeholder="Digite aqui..."
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
