import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Site from '../components/Stats/Site';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'components/ui/card';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Archita Malviya and archita-malviya.vercel.app"
  >
    <Card className="animate-fade-in overflow-hidden border-border/70 shadow-sm motion-reduce:animate-none">
      <CardHeader className="page-card-header">
        <CardTitle className="page-card-title">
          <Link to="/stats">Achievements &amp; stats</Link>
        </CardTitle>
        <CardDescription className="page-card-subtitle">
          Highlights from campaigns, content, and growth work.
        </CardDescription>
      </CardHeader>
      <CardContent className="page-card-body page-body-text space-y-8">
        <Site />
      </CardContent>
    </Card>
  </Main>
);

export default Stats;
