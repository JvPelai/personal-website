/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBreakpointValue, Box } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/About';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Profile from '../components/Profile';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';
import { fetchRepos } from './api/github/repos';

export const getStaticProps: GetStaticProps = async () => {
  const { repos } = await fetchRepos();
  return {
    props: {
      repos,
    },
  };
};
const Home: NextPage = (props) => {
  const profileSectionSize = useBreakpointValue({
    base: 'sm',
    sm: '2sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '4xl',
  });

  const flexDirectionBreakpoint = useBreakpointValue({
    base: 'column',
    md: 'row',
  });

  const responsivemarginX = useBreakpointValue({
    base: '1em',
    sm: '2em',
    md: '8em',
    lg: '12em',
    xl: '18em',
    '2xl': '24em',
  });
  return (
    <>
      <Head>
        <title>JvPelai - Dev</title>
        <meta name="description" content="João Pelai Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Box
          display="flex"
          flexDirection="column"
          marginX={responsivemarginX}
          size={profileSectionSize}
        >
          <Navbar />
          <Profile flexDirectionBreakpoint={flexDirectionBreakpoint} />
          <About />
          <Technologies />
          <Experience />
          <Projects
            profileSectionSize={profileSectionSize}
            flexDirectionBreakpoint={flexDirectionBreakpoint}
            repos={props}
          />
          <Footer />
        </Box>

        <DarkModeSwitch />
      </body>
    </>
  );
};

export default Home;
