import { Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import profileImage from '../../public/assets/profile.jpg';
import styles from '../styles/main.module.css';
const Profile = () => {
  return (
    <section>
      <div className={styles.profile}>
        <Image
          priority
          src={profileImage}
          alt="João Pelai"
          width={164}
          height={164}
        />

        <Stack className={styles.profileDescription}>
          <Heading size="lg">
            Hi there! My name is João, and I&apos;m Software Engineer.
          </Heading>
          <Text>
            <br /> You can reach me on &nbsp;
            <a href="https://twitter.com/JvPelai">Twitter</a> or &nbsp;
            <a href="https://www.linkedin.com/in/jvpelai/">Linkedin</a>.
          </Text>
        </Stack>
      </div>
    </section>
  );
};

export default Profile;
