import { Container } from 'semantic-ui-react';

// on importe le composant en charge de la description du header
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import reposData from 'src/data/repos';
import ReposResults from '../RepoResults';

import './styles.scss';

const { items: repos } = reposData;

function GitHubSearch() {
  const isErrorMessage = false;
  return (
    <Container className="git-hub-search">
      <Header />
      <SearchBar />
      <Message message="Bonjour" isError={isErrorMessage} />
      <ReposResults repos={repos} />
    </Container>
  );
}

export default GitHubSearch;
