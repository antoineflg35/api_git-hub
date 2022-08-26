import { Card, Image, Icon } from 'semantic-ui-react';

function RepoResult() {
  return (
    <Card>
      <Image src="https://avatars3.githubusercontent.com/u/698437?v=4" wrapped ui={false} />
      <Card.Content>
        <Card.Header>javascript</Card.Header>
        <Card.Meta>
          <span className="date">airbnb</span>
        </Card.Meta>
        <Card.Description>
          JavaScript Style Guide
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default RepoResult;
