import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import { Container } from 'semantic-ui-react';

import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import Menu from '../Menu';
import Faq from '../FAQ';
import NotFound from '../NotFound';

import ReposResults from '../RepoResults';

import './styles.scss';

function GitHubSearch() {
  const [search, setSearch] = useState('');
  const [repos, SetPosts] = useState([]);
  const [message, setMessage] = useState(['Bienvenue sur notre application ! Trouvez le repos qui vous convient :)']);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  function searchFromApi() {
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        const reposFromApi = response.data.items;
        const coucou = response.data.items.url;
        console.log(coucou);
        const countReposFromApi = response.data.total_count;
        SetPosts(reposFromApi);
        const messageToDisplay = countReposFromApi >= 2
          ? `La recherche a donné ${countReposFromApi} résultat(s)` : `La recherche a donné ${countReposFromApi} résultat`;
        setMessage(messageToDisplay);
        setIsErrorMessage(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage('Une erreur est survenue, merci de réessayer');
        setIsErrorMessage(true);
      })
      .then(() => {
      });
  }

  return (
    <Container className="git-hub-search">
      <Header />
      <Menu />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <SearchBar search={search} setSearch={setSearch} searchFromApi={searchFromApi} />
              <Message message={message} isErrorMessage={isErrorMessage} />
              <ReposResults repos={repos} />
            </>
        )}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default GitHubSearch;
