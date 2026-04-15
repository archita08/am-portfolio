import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card';
import { Separator } from 'components/ui/separator';

const roleBlocks = [
  {
    company: 'CirclePe (Freelance)',
    title: 'Content Strategist',
    dates: 'March 2023 - May 2023',
    bullets: [
      'Wrote SEO-optimized 40+ blog content',
      'Led SEO strategy for website (on-page and off-page)',
      'Developed LinkedIn content calendars for founders and brand (impressions 15k, with about 300+ post interactions)',
      'Executed content strategy for Quora and Reddit',
    ],
  },
  {
    company: 'Nira Fragrances (Freelance)',
    title: 'Digital Content Consultant',
    dates: 'Jan 2024 - Jan 2025',
    bullets: [
      'Co-created company website and oversaw design and content development',
      'Built and executed full content and design strategy',
      'Wrote blog articles and created social media content',
      'Managed influencer marketing efforts',
    ],
  },
  {
    company: 'Hello Genee (freelance)',
    title: 'Content & PPC Associate',
    dates: 'Jan 2024 - Jan 2025',
    bullets: [
      'Developed blog content and social media strategy',
      'Created ad copies and collaborated on graphics',
      'Handled PPC campaigns and managed SEO execution',
    ],
  },
  {
    company: 'Health Archiculates',
    title: 'Founder & Content Creator',
    dates: 'Dec 2022 - Present',
    bullets: [
      'Built and managed a personal wellness-focused content page',
      'Collaborated with skincare brands COSIQ and Earth Rhythm',
      'Created branded social media content and campaign assets',
    ],
  },
  {
    company: 'Toprankers & Career Launcher',
    title: 'Legal Content Writer & Course Developer',
    dates: 'Dec 2018 - Aug 2020',
    bullets: [
      'Designed legal writing curriculum and resources for CLAT aspirants',
      'Authored legal blogs, judgment analysis, and Supreme Court judgment summaries',
      'Supported educational content strategy for online legal platforms',
    ],
  },
];

const Projects = () => (
  <Main title="Projects" description="Learn about Archita Malviya's projects.">
    <Card className="animate-fade-in overflow-hidden border-border/70 shadow-sm motion-reduce:animate-none">
      <CardHeader className="page-card-header">
        <CardTitle className="page-card-title">
          <Link to="/projects">Projects</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="page-card-body page-body-text space-y-10">
        {roleBlocks.map((block, i) => (
          <section key={block.company} className="space-y-4">
            {i > 0 ? <Separator className="opacity-60" /> : null}
            <div className="space-y-1">
              <h3 className="page-card-title text-left">{block.company}</h3>
              <p className="text-base font-medium text-foreground">{block.title}</p>
              <p className="text-sm text-muted-foreground">{block.dates}</p>
            </div>
            <ul className="ml-5 list-disc space-y-2 pl-1 text-base font-normal leading-relaxed text-muted-foreground marker:text-primary/50 [&_strong]:font-semibold [&_strong]:text-foreground">
              {block.bullets.map((item) => (
                <li key={item} className="pl-0.5">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </CardContent>
    </Card>
  </Main>
);

export default Projects;
