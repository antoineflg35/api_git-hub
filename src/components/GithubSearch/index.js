import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../RepoResults';

function GitHubSearch() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

export default GitHubSearch;
