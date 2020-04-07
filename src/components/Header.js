import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
      <Link to="/">COVID-19 MAP</Link>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/resources/">Resources</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
