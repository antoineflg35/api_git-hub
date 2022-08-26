import { Card } from 'semantic-ui-react';

import RepoResult from './RepoResult';

function ReposResults() {
  return (
    <Card.Group itemsPerRow={3} stackable>
      <RepoResult />
      <RepoResult />
      <RepoResult />
      <RepoResult />
      <RepoResult />
      <RepoResult />
    </Card.Group>
  );
}

export default ReposResults;
