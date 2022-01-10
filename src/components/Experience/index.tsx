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
} from '@chakra-ui/react';
import { IProfileProps } from '../Profile';

const Experience = (props: IProfileProps) => {
  const experiences = [
    {
      title: 'Full Stack Engineer',
      company: 'Fornax Tecnologia',
      time: '4 months',
      description: `Developed, maintained and improved codebase with Javascript, Java, Relational databases, ORM's frontend technologies, Docker, Kubernetes, Kafka, AWS and other technologies relevant to development requirements in a microservice ecosystem. Wrote unit tests and integration tests for backend and frontend code.
    Colaborated with an international agile software engineering team to deliver Quality software that serves the Client's activities and demands.`,
    },
    {
      title: 'Full Stack Developer',
      company: 'Pecege',
      time: '1 year',
      description: `Collaborated with product managers, UX designers, and quality control professionals to build digital products. Developed, maintained, and executed test scripts. Performed user requirements analysis to increase user satisfaction during rapid application development. Developed and tested defined user stories using Node.js and React.js with typescript. Performed error hunting and then utilized problem solving skills to fix bugs. Collaborated with the team in an Agile software development environment to guide project design`,
    },
  ];

  const { profileSectionSize } = props;
  return (
    <Box>
      <Stack>
        <Heading fontSize={profileSectionSize}>Work Experience</Heading>

        <Accordion allowMultiple allowToggle>
          {experiences.map((xp) => {
            return (
              <AccordionItem key={xp.title}>
                <AccordionButton>
                  <h1>{xp.title}</h1>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  {xp.company} - {xp.time}
                  <p>{xp.description}</p>
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
