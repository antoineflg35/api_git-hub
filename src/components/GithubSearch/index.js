import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../RepoResults';

import './styles.scss';

function GitHubSearch() {
  return (
    <div className='git-hub-search'>
      <Header />
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

export default GitHubSearch;
