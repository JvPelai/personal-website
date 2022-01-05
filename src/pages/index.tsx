import type { NextPage } from 'next';
import Head from 'next/head';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import Profile from '../components/Profile';

const Home: NextPage = () => {
  return (
    <body>
      <Head>
        <title>JvPelai - Dev</title>
        <meta name="description" content="João Pelai Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile />
      <DarkModeSwitch />
    </body>
  );
};

export default Home;
