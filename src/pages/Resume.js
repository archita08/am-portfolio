import React from 'react';

import Main from '../layouts/Main';

import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';

import work from '../data/resume/work';
import { tools, categories } from '../data/resume/skills';
import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card';
import { Separator } from 'components/ui/separator';

const sections = {
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills tools={tools} categories={categories} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Archita Malviya's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <Card className="animate-fade-in overflow-hidden border-border/70 shadow-sm motion-reduce:animate-none">
      <CardHeader className="page-card-header">
        <CardTitle className="page-card-title">My works</CardTitle>
      </CardHeader>
      <CardContent className="page-card-body page-body-text space-y-8">
        {Object.entries(sections).map(([name, Section], i) => (
          <section key={name} id={name.toLowerCase()} className="space-y-4">
            {i > 0 && <Separator className="opacity-60" />}
            <Section />
          </section>
        ))}
      </CardContent>
    </Card>
  </Main>
);

export default Resume;
