import React from 'react';
import Main from '../layouts/Main';
import CaseStudyOne from '../components/CaseStudies/CaseStudyOne';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'components/ui/card';

const sections = {
  CaseStudyOne: () => <CaseStudyOne />,
};

const CaseStudies = () => (
  <Main
    title="Case Studies"
    description="Archita Malviya's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <Card className="animate-fade-in overflow-hidden border-border/70 shadow-sm motion-reduce:animate-none">
      <CardHeader className="page-card-header">
        <CardTitle className="page-card-title">Case studies</CardTitle>
        <CardDescription className="page-card-subtitle">
          Deeper dives into strategy, execution, and outcomes.
        </CardDescription>
      </CardHeader>
      <CardContent className="page-card-body space-y-8">
        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}
      </CardContent>
    </Card>
  </Main>
);

export default CaseStudies;
