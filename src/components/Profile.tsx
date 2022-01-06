import {
  Box,
  Heading,
  ResponsiveValue,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/main.module.css';
import profileImage from '../../public/assets/profile.jpg';

const Profile = () => {
  const profileSectionSize = useBreakpointValue({
    base: 'sm',
    sm: '3sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  });

  const flexDirectionBreakpoint: ResponsiveValue<any> = useBreakpointValue({
    base: 'column',
    sm: 'row',
  });
  return (
    <section>
      <Box
        display="flex"
        flexDirection={flexDirectionBreakpoint}
        justifyContent="center"
        padding="2em"
        margin="2em"
        size={profileSectionSize}
      >
        <Image
          src={profileImage}
          alt="João Pelai"
          width="164px"
          height="164px"
          className={styles.profileImage}
        />

        <Stack margin="1em">
          <Heading fontSize={profileSectionSize}>
            Hi there! My name is João, and I&apos;m Software Engineer.
          </Heading>
          <Text>
            <br /> You can reach me on &nbsp;
            <a href="https://twitter.com/JvPelai">Twitter</a> or &nbsp;
            <a href="https://www.linkedin.com/in/jvpelai/">Linkedin</a>.
          </Text>
        </Stack>
      </Box>
    </section>
  );
};

export default Profile;
