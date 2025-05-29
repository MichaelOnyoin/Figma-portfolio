import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import WorkFilter from '@/components/WorkFilter';
//import Navbar from '@/components/Navbar';
import ContactForm from '@/components/Contact';

const Home: React.FC = () => {
  return (
    <Layout>
     
      <Hero />
      <WorkFilter/>
      <ContactForm/>
    </Layout>
  );
};

export default Home;
export const metadata = {
  title: 'Onyoin Design',
  description: 'A showcase of design works by Onyoin Design',
};