import { Divider, Heading, Box, Stack } from '@chakra-ui/react';
import { IProfileProps } from '../Profile';

const Projects = (props: IProfileProps) => {
  const projects = [
    {
      title: 'Oraculo',
      description: `League of Legends app`,
    },
  ];

  const { profileSectionSize } = props;
  return (
    <Box>
      <Stack>
        <Heading fontSize={profileSectionSize}>Side Projects</Heading>

        {projects.map((xp) => {
          return (
            <div key={xp.title}>
              <h3>{xp.title}</h3>

              <p>{xp.description}</p>
            </div>
          );
        })}
      </Stack>
      <Divider my={'1em'} />
    </Box>
  );
};

export { Projects };
