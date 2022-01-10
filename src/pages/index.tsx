/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBreakpointValue, ResponsiveValue, Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/About';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Profile from '../components/Profile';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';

const Home: NextPage = () => {
  const profileSectionSize: ResponsiveValue<any> = useBreakpointValue({
    base: '2sm',
    sm: '3sm',
    md: '2md',
    lg: '2lg',
    xl: '2xl',
  });

  const flexDirectionBreakpoint: ResponsiveValue<any> = useBreakpointValue({
    base: 'column',
    md: 'row',
  });

  const responsivemarginX: ResponsiveValue<any> = useBreakpointValue({
    base: '1em',
    sm: '3em',
    md: '8em',
    lg: '13em',
    xl: '18em',
  });
  return (
    <body>
      <Head>
        <title>JvPelai - Dev</title>
        <meta name="description" content="João Pelai Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="flex" flexDirection="column" marginX={responsivemarginX}>
        <Navbar />
        <Profile
          profileSectionSize={profileSectionSize}
          flexDirectionBreakpoint={flexDirectionBreakpoint}
        />
        <About
          profileSectionSize={profileSectionSize}
          flexDirectionBreakpoint={flexDirectionBreakpoint}
        />
        <Technologies />
        <Experience
          profileSectionSize={profileSectionSize}
          flexDirectionBreakpoint={flexDirectionBreakpoint}
        />
        <Projects
          profileSectionSize={profileSectionSize}
          flexDirectionBreakpoint={flexDirectionBreakpoint}
        />
        <Footer />
      </Box>

      <DarkModeSwitch />
    </body>
  );
};

export default Home;
