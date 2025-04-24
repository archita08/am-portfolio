import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={ `https://i.pinimg.com/736x/72/b5/dc/72b5dcf7d3451a5a629b684ecdc65ec8.jpg`} alt="" />
      </Link>
      <header>
        <h2>Archita Malviya</h2>
        <p>
          <a href="mailto:archi.m8@gmail.com">archi.m8@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        {/* Hi, I&apos;m Archita. I am a{' '}
        <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC
        alumnus, and the co-founder and CTO of{' '}
        <a href="https://promptfoo.dev">Promptfoo</a>. Previously, I
        was VP of Engineering at <a href="https://usesmileid.com">SmileID</a>,
        co-founder and CTO of <a href="https://arthena.com">Arthena</a>, and
        co-founded <a href="https://matroid.com">Matroid</a>. */}
        Hi, I&apos;m Archita. I am a{' '}
        Creative and strategic Marketing and Content Specialist with 5+ years of experience across B2B SaaS, D2C, and agency ecosystems. Proven expertise in leading cross-functional teams, developing full-funnel marketing and content strategies, executing social media campaigns, and building brands from scratch. Adept at storytelling, brand positioning, and creating user-centric content that drives engagement, conversions, and growth.
      </p>
      <ul className="actions">
        <li>
          <Link to="/resume" className="button">
            My Resume
          </Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Archita Malviya <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
