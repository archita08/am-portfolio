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
        <p><span>Hi, I'm Archita. I am a Results-driven </span><strong>Marketing and Content Leader</strong><span> with </span><strong>5+ years of experience</strong><span> scaling traffic, engagement, and conversions for startups and SaaS brands. Built content and </span><strong>SEO engines</strong><span> from scratch, driving </span><strong>100K+ monthly visitors</strong><span> and consistent lead generation through organic and paid channels. Known for crafting high-converting narratives, building cross-functional strategies, and growing brand presence across LinkedIn, YouTube, and marketplaces. partnerships, and </span><strong>ROI-led marketing</strong><span>. Adaptable, data-driven, and Strong communicator with an eye for detail and a focus on performance, experienced in leading teams and campaigns that </span><strong>deliver measurable growth</strong><span>.</span></p>
      </p>
      <p>
        {' '}
        Welcome to my Portfolio. Please feel free to read more{' '}you can check out my{' '}
        <strong><Link to="/my-works">my works</Link></strong>, <strong><Link to="/projects">projects</Link></strong>,{' '}
        view <strong><Link to="/stats">my achievements stats</Link></strong>, <strong><Link to="/case-studies">my case studies</Link></strong>, or{' '}
        <strong><Link to="/contact">contact</Link></strong> me.
      </p>
    </article>
  </Main>
);

export default Index;
