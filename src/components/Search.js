import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => setSearchValue(e.target.value);

  const resetInputField = () => setSearchValue('');

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="search" />
    </form>
  );
};

Search.propTypes = {
  search: PropTypes.func,
};

export default Search;
