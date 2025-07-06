import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import CaseStudyOne from '../components/CaseStudies/CaseStudyOne';

// NOTE: sections are displayed in order defined.
const sections = {
  // Education: () => <Education data={degrees} />,
  CaseStudyOne: () => <CaseStudyOne />,
  // Courses: () => <Courses data={courses} />,
  // References: () => <References />,
};

const Resume = () => (
  <Main
    title="Case Studies"
    description="Archita Malviya's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Case Studies</h2>
        </div>
      </header>
      <CaseStudyOne />
    </article>
  </Main>
);

export default Resume;
