import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
//import RecentWorks from '@/components/RecentWorks';
import WorkFilter from '@/components/WorkFilter';
//import Portfolio from '@/components/Filter';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <WorkFilter/>
      {/* <RecentWorks /> */}
      {/* <Portfolio/> */}
    </Layout>
  );
};

export default Home;
export const metadata = {
  title: 'Onyoin Design',
  description: 'A showcase of design works by Onyoin Design',
};