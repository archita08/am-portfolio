import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'components/ui/card';

const Index = () => (
  <Main
    description={
      "Archita Malviya's personal Portfolio. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <Card className="animate-fade-in overflow-hidden border-border/70 shadow-sm motion-reduce:animate-none">
      <CardHeader className="page-card-header">
        <CardTitle className="page-card-title">
          <Link to="/">About me</Link>
        </CardTitle>
        <CardDescription className="page-card-subtitle">
          Marketing &amp; content leadership
        </CardDescription>
      </CardHeader>
      <CardContent className="page-card-body page-body-text space-y-6">
        <p>
          Hi, I&apos;m Archita. I am a results-driven{' '}
          <strong className="font-semibold text-foreground">
            marketing and content leader
          </strong>{' '}
          with{' '}
          <strong className="font-semibold text-foreground">
            5+ years of experience
          </strong>{' '}
          scaling traffic, engagement, and conversions for startups and SaaS
          brands. I&apos;ve built content and{' '}
          <strong className="font-semibold text-foreground">SEO engines</strong>{' '}
          from scratch, driving{' '}
          <strong className="font-semibold text-foreground">
            100K+ monthly visitors
          </strong>{' '}
          and consistent lead generation through organic and paid channels.
          Known for high-converting narratives, cross-functional strategy, and
          growing brand presence across LinkedIn, YouTube, and marketplaces —
          with an{' '}
          <strong className="font-semibold text-foreground">
            ROI-led marketing
          </strong>{' '}
          mindset. Adaptable, data-driven, and detail-oriented; I lead teams
          and campaigns that{' '}
          <strong className="font-semibold text-foreground">
            deliver measurable growth
          </strong>
          .
        </p>
        <p>
          Welcome to my portfolio. Explore{' '}
          <Link
            to="/my-works"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            my works
          </Link>
          ,{' '}
          <Link
            to="/projects"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            projects
          </Link>
          ,{' '}
          <Link
            to="/stats"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            achievements &amp; stats
          </Link>
          ,{' '}
          <Link
            to="/case-studies"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            case studies
          </Link>
          , or{' '}
          <Link
            to="/contact"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            get in touch
          </Link>
          .
        </p>
      </CardContent>
    </Card>
  </Main>
);

export default Index;
