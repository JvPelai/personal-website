import { IconButton, Stack } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Stack direction="row" spacing="4" marginBottom={3}>
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/jvpelai/"
        aria-label="Linkedin"
        color="#0e76a8"
      >
        <FaLinkedin size="2em" />
      </IconButton>
      <IconButton as="a" aria-label="GitHub" color="#171515">
        <FaGithub size="2em" />
      </IconButton>
      <IconButton as="a" aria-label="Twitter" color="#00acee">
        <FaTwitter size="2em" />
      </IconButton>
      <IconButton as="a" aria-label="Instagram" color="#fb3958">
        <FaInstagram size="2em" />
      </IconButton>
    </Stack>
  );
};

export { Footer };
