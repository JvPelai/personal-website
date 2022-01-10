/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Divider,
  Heading,
  ResponsiveValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/main.module.scss';
import profileImage from '../../public/assets/profile.jpg';

export interface IProfileProps {
  profileSectionSize: ResponsiveValue<any>;
  flexDirectionBreakpoint: ResponsiveValue<any>;
}

const Profile = (props: IProfileProps) => {
  const { profileSectionSize, flexDirectionBreakpoint } = props;
  return (
    <>
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

        <Stack marginY="2em">
          <Heading fontSize={profileSectionSize}>
            João Victor Pelai - Software Engineer.
          </Heading>
          <Text fontSize={profileSectionSize}>
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
