import React from 'react';

function SearchBar({ filterText, setFilterText }) {
  function handleFilterTextChange(e) {
    setFilterText(e.target.value);
  }
  return (
    <form>
      <input
        type='text'
        placeholder='Pesquisar...'
        value={filterText}
        onChange={handleFilterTextChange}
      ></input>
    </form>
  );
}

export default SearchBar;
