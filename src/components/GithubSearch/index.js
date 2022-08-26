import { Container } from 'semantic-ui-react';

// on importe le composant en charge de la description du header
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from '../RepoResults';

import './styles.scss';

function GitHubSearch() {
  return (
    <Container className="git-hub-search">
      {
        // on l'instancie
      }
      <Header />
      <SearchBar />
      <Message />
      <ReposResults />
    </Container>
  );
}

export default GitHubSearch;
