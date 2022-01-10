import { Divider, Heading, Text, Box, Stack } from '@chakra-ui/react';
import { IProfileProps } from '../Profile';

const About = (props: IProfileProps) => {
  const { profileSectionSize } = props;
  return (
    <Box>
      <Stack>
        <Heading fontSize={profileSectionSize}>About</Heading>
        <Text fontSize={profileSectionSize}>
          My name is João, and I&apos;m a Brazilian Software Developer, eager to
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
