/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Divider,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/main.module.scss';

export interface IProfileProps {
  flexDirectionBreakpoint: any;
}

const Profile = (props: IProfileProps) => {
  const { flexDirectionBreakpoint } = props;
  return (
    <>
      <Box display="flex" flexDirection={flexDirectionBreakpoint}>
        <div className={styles.profileImage}>
          <Image
            src="/assets/profile.jpg"
            alt="João Pelai"
            width={164}
            height={164}
            objectFit="cover"
          />
        </div>

        <Stack marginY="2em">
          <Heading>
            João Victor Pelai - Software Engineer.
          </Heading>
          <Text>
            <br /> You can reach me on &nbsp;
            <a href="https://twitter.com/JvPelai">Twitter</a> or &nbsp;
            <a href="https://www.linkedin.com/in/jvpelai/">Linkedin</a>.
          </Text>
        </Stack>
      </Box>
      <Divider my={'1em'} />
    </>
  );
};

export default Profile;
