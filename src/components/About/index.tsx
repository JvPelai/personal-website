import { Divider, Heading, Text, Box, Stack } from '@chakra-ui/react';

const About = () => {
  return (
    <Box>
      <Stack>
        <Heading>About</Heading>
        <Text maxWidth='75%' >
          I&apos;m a Software Developer, eager to
          overcome bigger challenges, learn new technologies and frameworks, and
          build next generation solutions. I&apos;m enthusiastic about NodeJS,
          Docker and Kubernetes and my current focus is on acquiring knowledge
          and skills to build microservices ready for production!
        </Text>
      </Stack>
      <Divider my={'1em'} />
    </Box>
  );
};

export { About };
