import { Card } from 'semantic-ui-react';

import PropTypes from 'prop-types';
import RepoResult from './RepoResult';

function ReposResults({ repos }) {
  return (
    <Card.Group itemsPerRow={3} stackable centered className='group-card'>
      {
        repos.map(
          (repo) => <RepoResult key={repo.id} {...repo} />,
        )
      }
    </Card.Group>
  );
}

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ReposResults;
