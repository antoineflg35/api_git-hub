import { Segment, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function SearchBar({ search, setSearch }) {
  return (
    <Segment><Input
      value={search}
      fluid
      iconPosition="left"
      icon="search"
      placeholder="Search..."
      onChange={(event) => setSearch(event.target.value)}
    />
    </Segment>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
