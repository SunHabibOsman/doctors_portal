import React from 'react';
import Apponment from './Apponment';
import Banner from './Banner';

import Card from './Card';
import Contact from './Contact';
import MenSection from './MenSection';
import Service from './Service';
import Testmonial from './Testmonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <Service></Service>
      <MenSection></MenSection>
      <Apponment></Apponment>
      <Testmonial></Testmonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;