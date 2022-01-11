/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Divider,
  Text,
  Heading,
  Box,
  Stack,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { LanguageIcon } from '../LanguageIcon';

const Projects = (props: any) => {
  const { repos } = props.repos;

  return (
    <Box>
      <Stack height="md">
        <Heading>Side Projects</Heading>
        <Box
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'grey.800',
              borderRadius: '24px',
            },
          }}
        >
          {repos.map((repo: any) => {
            return (
              <div key={repo.name}>
                <LinkBox
                  as="article"
                  p="5"
                  borderWidth="2px"
                  rounded="md"
                  key={repo.name}
                  _hover={{
                    borderColor: 'blue.800',
                  }}
                >
                  <Heading my="2">
                    <LinkOverlay href={repo.url}>{repo.name}</LinkOverlay>
                  </Heading>
                  <Text mb="3">{repo.description}</Text>
                  <span>
                    {repo.languages.nodes.map((lang: any) => (
                      <span key={lang.id}>
                        <LanguageIcon langName={lang.name} />{' '}
                      </span>
                    ))}
                  </span>
                </LinkBox>
              </div>
            );
          })}
        </Box>
      </Stack>
      <Divider my={'1em'} />
    </Box>
  );
};

export { Projects };
