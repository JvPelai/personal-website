import { IconButton, Stack, Text } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      alignItems="center"
      marginBottom={3}
    >
      <IconButton
        variant="unstyled"
        as="a"
        href="https://www.linkedin.com/in/jvpelai/"
        aria-label="Linkedin"
        color="#0e76a8"
      >
        <FaLinkedin size="2em" />
      </IconButton>
      <IconButton
        variant="unstyled"
        as="a"
        href="https://github.com/JvPelai"
        aria-label="GitHub"
        color="gray.600"
      >
        <FaGithub size="2em" />
      </IconButton>
      <Text color="gray.500">© 2022 João Vianna</Text>
    </Stack>
  );
};

export { Footer };
