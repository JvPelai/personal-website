import {
  Box,
  Divider,
  Heading,
  ResponsiveValue,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/main.module.scss';
import profileImage from '../../public/assets/profile.jpg';
import { Navbar } from './Navbar';

const Profile = () => {
  const profileSectionSize = useBreakpointValue({
    base: 'sm',
    sm: '2sm',
    md: '2md',
    lg: '2lg',
    xl: 'xl',
  });

  const flexDirectionBreakpoint: ResponsiveValue<any> = useBreakpointValue({
    base: 'column',
    md: 'row',
  });
  return (
    <section>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        size={profileSectionSize}
        fontSize={profileSectionSize}
      >
        <Box display="flex" flexDirection="column">
          <Navbar />
          <Box display="flex" flexDirection={flexDirectionBreakpoint}>
            <div className={styles.profileImage}>
              <Image
                src={profileImage}
                alt="João Pelai"
                width={164}
                height={164}
                objectFit="cover"
              />
            </div>

            <Stack marginY="3em" marginX="1em">
              <Heading fontSize={profileSectionSize}>
                Hi there! My name is João, and I&apos;m Software Engineer.
              </Heading>
              <Text fontSize={profileSectionSize}>
                <br /> You can reach me on &nbsp;
                <a href="https://twitter.com/JvPelai">Twitter</a> or &nbsp;
                <a href="https://www.linkedin.com/in/jvpelai/">Linkedin</a>.
              </Text>
            </Stack>
          </Box>
          <Divider my={'1em'} />
        </Box>
      </Box>
    </section>
  );
};

export default Profile;
