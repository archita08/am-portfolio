import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects" description="Learn about Archita Malviya's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          {/* <p>A selection of projects that I&apos;m not too ashamed of</p> */}
        </div>
      </header>
      {/* {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))} */}

      <div>
        <div>
          <div style={{ textAlign: 'left', fontSize: '24px' }}>
            <div><strong><span>CirclePe (Freelance)&nbsp;</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div><strong><span>Content Strategist</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div>March 2023 - May 2023</div>
          </div>
          <ul style={{ textAlign: 'left', fontSize: '16px' }}>
            <li><span>Wrote SEO-optimized&nbsp;</span><strong><span>40+ blog content</span></strong></li>
            <li><span>Led&nbsp;</span><strong><span>SEO strategy</span></strong><span>&nbsp;for website (on-page and off-page)</span></li>
            <li><span>Developed LinkedIn content calendars for founders and brand (</span><strong><span>impressions 15k, with about 300+ post interactions</span></strong><span>)</span></li>
            <li><span>Executed content strategy for&nbsp;</span><strong><span>Quora and Reddit</span></strong></li>
          </ul>
          <div style={{ textAlign: 'left', fontSize: '24px' }}>
            <div><strong><span>Nira Fragrances (Freelance) &nbsp;</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div><strong><span>Digital Content Consultant</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div>Jan 2024 - Jan 2025</div>
          </div>
          <ul style={{ textAlign: 'left', fontSize: '16px' }}>
            <li><span>Co-created company website and&nbsp;</span><strong><span>oversaw design and content development</span></strong></li>
            <li><span>Built and executed full content and design strategy</span></li>
            <li><span>Wrote&nbsp;</span><strong><span>blog articles</span></strong><span>&nbsp;and created&nbsp;</span><strong><span>social media content</span></strong></li>
            <li><span>Managed&nbsp;</span><strong><span>influencer marketing</span></strong><span>&nbsp;efforts</span></li>
          </ul>
        </div>
        <div>
          <div style={{ textAlign: 'left', fontSize: '24px' }}>
            <div><strong><span>Hello Genee (freelance)&nbsp;</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div><strong><span>Content &amp; PPC Associate</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div>Jan 2024 - Jan 2025</div>
          </div>
          <ul style={{ textAlign: 'left', fontSize: '16px' }}>
            <li><span>Developed&nbsp;</span><strong><span>blog content&nbsp;</span></strong><span>and&nbsp;</span><strong><span>social media strategy</span></strong></li>
            <li><span>C</span><span>reated ad copies and collaborated on&nbsp;</span><strong><span>graphics</span></strong></li>
            <li><span>Handled&nbsp;</span><strong><span>PPC campaigns</span></strong><span>&nbsp;and managed&nbsp;</span><strong><span>SEO execution</span></strong></li>
          </ul>
          <div style={{ textAlign: 'left', fontSize: '24px' }}>
            <div><strong><span>Health Archiculates&nbsp;</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div><strong><span>Founder &amp; Content Creator</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div>Dec 2022 - Present</div>
          </div>
          <ul style={{ textAlign: 'left', fontSize: '16px' }}>
            <li><span>Built and managed a&nbsp;</span><strong><span>personal wellness-focused content page</span></strong></li>
            <li><span>Co</span><span>llaborated with skincare brands&nbsp;</span><strong><span>COSIQ and Earth Rhythm</span></strong></li>
            <li><span>C</span><span>reated&nbsp;</span><strong><span>branded social media content</span></strong><span>&nbsp;and campaign assets</span></li>
          </ul>
          <div style={{ textAlign: 'left', fontSize: '24px' }}>
            <div><strong><span>Toprankers &amp; Career Launcher</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div><strong><span>Legal Content Writer &amp; Course Developer</span></strong></div>
          </div>
          <div style={{ textAlign: 'left', fontSize: '16px' }}>
            <div>Dec 2018 - Aug 2020</div>
          </div>
          <ul style={{ textAlign: 'left', fontSize: '16px' }}>
            <li><span>Designed legal writing curriculum and resources for&nbsp;</span><strong><span>CLAT aspirants</span></strong></li>
            <li><span>Au</span><span>thored&nbsp;</span><strong><span>legal blogs, judgment analysis</span></strong><span>, and Supreme Court judgment summaries</span></li>
            <li><span>Supporte</span><span>d educational&nbsp;</span><strong><span>content strategy for online legal platforms</span></strong></li>
          </ul>
        </div>
      </div>
    </article>
  </Main>
);

export default Projects;
