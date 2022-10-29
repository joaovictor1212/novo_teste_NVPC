import React, { useState } from 'react';
import ReposList from '../ReposList';
import SearchBar from '../SearchBar';

function Container() {
  const [filterText, setFilterText] = useState('');

  return (
    <>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <ReposList filterText={filterText} />
    </>
  );
}

export default Container;
