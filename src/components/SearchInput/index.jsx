import P from 'prop-types';
import './styles.css';

export const SearchInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="search-input"
      type="search"
      value={searchValue}
      placeholder="Type your search"
      onChange={handleChange}
    />
  );
};

SearchInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
