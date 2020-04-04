import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() }, Built with Love &#129304;</p>
      </Container>
    </footer>
  );
};

export default Footer;
