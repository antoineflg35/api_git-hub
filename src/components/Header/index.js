import { Image } from 'semantic-ui-react';

import logo from 'src/assets/images/logo-github.png';

function Header() {
  return (
    <header>
      <Image src={logo} size="small" centered />
    </header>
  );
}

export default Header;
