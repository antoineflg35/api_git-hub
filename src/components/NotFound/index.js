import { Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Segment>
      <h1>Page not found</h1>
      <p><Link to="/">Retour à la page d'accueil</Link></p>
    </Segment>
  );
}

export default NotFound;
