import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function RepoResult({ name, owner, description }) {
  const { login, avatar_url: avatarUrl } = owner;
  return (
    <Card>
      <Image src={avatarUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{login}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

RepoResult.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string,
};

RepoResult.defaultProps = {
  description: '',
};

export default RepoResult;
