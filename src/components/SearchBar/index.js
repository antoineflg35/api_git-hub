import PropTypes from 'prop-types';


import { Segment, Input, Form } from 'semantic-ui-react';

function SearchBar({ search, setSearch, searchFromApi }) {
  function handleSubmit() {
    console.log('submit');
    searchFromApi();
    setSearch('');
  }

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Input
          fluid
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  searchFromApi: PropTypes.func.isRequired,
};

export default SearchBar;
