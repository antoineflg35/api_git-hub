import { Segment, Input } from 'semantic-ui-react';

// Note pour plus tard :
// loading iconPosition="left"

function SearchBar() {
  return <Segment><Input iconPosition="left" icon="search" placeholder="Search..." /></Segment>;
}

export default SearchBar;
