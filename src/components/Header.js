import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>COVID-19 MAP</p>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/page-2/">Resources</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
