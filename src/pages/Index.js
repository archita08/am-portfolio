import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Archita Malviya's personal Portfolio. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About Me</Link>
          </h2>
        </div>
      </header>
      <p>
        Hi, I&apos;m Archita. I am a{' '}
        Creative and strategic Marketing and Content Specialist with 5+ years of experience across B2B SaaS, D2C, and agency ecosystems. Proven expertise in leading cross-functional teams, developing full-funnel marketing and content strategies, executing social media campaigns, and building brands from scratch. Adept at storytelling, brand positioning, and creating user-centric content that drives engagement, conversions, and growth.
      </p>
      <p>
        {' '}
        Welcome to my Portfolio. Please feel free to read more{' '}you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
