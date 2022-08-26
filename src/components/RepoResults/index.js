import { Card } from 'semantic-ui-react';
import RepoResult from './RepoResult';

function ReposResults() {
  return (
    <div>
      <Card.Group itemsPerRow={3} />
      <RepoResult />
      <RepoResult />
      <RepoResult />
      <RepoResult />
      <RepoResult />
      <RepoResult />
      <Card.Group />
    </div>
  );
}

export default ReposResults;
