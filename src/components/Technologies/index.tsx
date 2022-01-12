import {
  Divider,
  Grid,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';

export interface ITechLink {
  name: string;
  description: string;
  url: string;
}

const Technologies = () => {
  const tools: ITechLink[] = [
    {
      name: 'Node.js',
      description: 'Javascript runtime for building scalable applications',
      url: 'https://www.nodejs.org',
    },
    {
      name: 'Javascript',
      description: 'Versatile programming language suited for many cases',
      url: 'https://www.javascript.info',
    },
    {
      name: 'React.js',
      description: 'Front-end framework for building dynamic web applications',
      url: 'https://www.reactjs.org',
    },
    {
      name: 'SQL & MongoDb',
      description: 'Databases',
      url: 'https://www.mongodb.com/',
    },
    {
      name: 'GIT & Github',
      description: 'Version control',
      url: 'https://git-scm.com/',
    },
  ];
  return (
    <>
      <Stack>
        <Heading>Technologies</Heading>
        <Text>Some of the tools I am most familiar with: </Text>
      </Stack>
      <Grid
        mt={10}
        templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={5}
      >
        {tools.map((tool) => {
          return (
            <LinkBox
              as="article"
              maxW="sm"
              p="5"
              borderWidth="2px"
              rounded="md"
              key={tool.name}
              _hover={{
                borderColor: 'blue.800',
              }}
            >
              <Heading my="2">
                <LinkOverlay href={tool.url}>{tool.name}</LinkOverlay>
              </Heading>
              <Text mb="3">{tool.description}</Text>
            </LinkBox>
          );
        })}
      </Grid>
      <Divider my="1em" />
    </>
  );
};

export { Technologies };
