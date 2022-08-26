import { Menu as MenuSUI } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <MenuSUI>
      <MenuSUI.Item as={NavLink} to="/">
        Recherche
      </MenuSUI.Item>

      <MenuSUI.Item as={NavLink} to="/faq">
        FAQ
      </MenuSUI.Item>
    </MenuSUI>
  );
}

export default Menu;
