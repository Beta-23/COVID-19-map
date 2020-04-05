import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>Built with Love &#129304; &copy; { new Date().getFullYear() } </p>
      </Container>
    </footer>
  );
};

export default Footer;
