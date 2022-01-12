/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/main.module.scss';

export interface IProfileProps {
  flexDirectionBreakpoint: any;
}

const Profile = (props: IProfileProps) => {
  const { flexDirectionBreakpoint } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection={flexDirectionBreakpoint}
        alignItems="center"
      >
        <div className={styles.profileImage}>
          <Image
            src="/assets/profile.jpg"
            alt="João Pelai"
            width={164}
            height={164}
            objectFit="cover"
          />
        </div>

        <Heading> Hi there! I&apos;m João!</Heading>
      </Box>
      <Divider my={'1em'} />
    </>
  );
};

export default Profile;
