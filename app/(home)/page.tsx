import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import WorkFilter from '@/components/WorkFilter';
import Skills from '@/components/skills/Skills';
import ContactForm from '@/components/ContactPage';

const Home: React.FC = () => {
  return (
    <Layout>
      
      <Hero />
      <Skills/>
      <WorkFilter/>
      <ContactForm/>
    </Layout>
  );
};

export default Home;
export const metadata = {
  title: 'Onyoins Portfolio',
  description: 'A showcase of design works by Onyoin Design',
};