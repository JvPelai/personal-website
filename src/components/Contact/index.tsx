import { EmailIcon } from '@chakra-ui/icons';
import { Stack, Button, Divider, Heading, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <>
      <Heading id="contact" my={2}>Contact</Heading>
      <Text my={3}>Feel free to send me an e-mail! </Text>
      <Stack direction="row" spacing={4}>
        <Button
          href="mailto:jv.pelai@gmail.com"
          as="a"
          leftIcon={<EmailIcon />}
          colorScheme='teal'
          variant="solid"
        >
          Email
        </Button>
      </Stack>
      <Divider my={'1em'} />
    </>
  );
};

export { Contact };
