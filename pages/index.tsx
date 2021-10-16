import type { NextPage } from 'next';

import Head from 'next/head';

import Home from '@components/Home';
import Preload from '@components/Preload';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>tw-Animated</title>
      <meta
        content="animated-tailwindcss is a package that brings Animate.css classes to Tailwind CSS"
        name="description"
      />
      <Preload font="quicksand-latin-variable-wghtOnly-normal" />
    </Head>
    <Home />
  </>
);

export default IndexPage;
