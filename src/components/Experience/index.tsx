import {
  Divider,
  Heading,
  Box,
  Stack,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
  Text,
} from '@chakra-ui/react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Engineer',
      company: 'Fornax Tecnologia',
      time: '4 months',
      description: `Developed, maintained and improved codebase with Javascript, Java, Relational databases, ORM's, frontend technologies, Docker, Kubernetes, Kafka, AWS and other technologies relevant to development requirements in a microservice ecosystem.\n Wrote unit tests and integration tests for backend and frontend code.
    \nColaborated with an international agile software engineering team to deliver Quality software that serves the Client's activities and demands.`,
    },
    {
      title: 'Full Stack Developer',
      company: 'Pecege',
      time: '1 year',
      description: `Collaborated with product managers, UX designers, and quality control professionals to build digital products.\nDeveloped, maintained, and executed test scripts.\nPerformed user requirements analysis to increase user satisfaction during rapid application development.\nDeveloped and tested defined user stories using Node.js and React.js with typescript.\nPerformed error hunting and then utilized problem solving skills to fix bugs.\nCollaborated with the team in an Agile software development environment to guide project design`,
    },
  ];

  return (
    <Box>
      <Stack>
        <Heading id="experience">Work Experience</Heading>

        <Accordion defaultIndex={[0, 1]} allowMultiple allowToggle>
          {experiences.map((xp) => {
            return (
              <AccordionItem key={xp.title}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {xp.title}, {xp.company} - {xp.time}
                  </Box>

                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Text maxW='75%' >{xp.description}</Text>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Stack>
      <Divider my={'1em'} />
    </Box>
  );
};

export { Experience };
