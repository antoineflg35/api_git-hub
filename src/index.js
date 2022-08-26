// == Import : npm
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


import GithubSearch from 'src/components/GithubSearch';

import 'semantic-ui-css/semantic.min.css';

const rootReactElement = (
  <BrowserRouter>
    <GithubSearch />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
