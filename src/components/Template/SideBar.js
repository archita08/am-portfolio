import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/ui/card';
import { Separator } from 'components/ui/separator';
import ContactIcons from '../Contact/ContactIcons';
import myPic from '../../pages/images/me.jpeg';
import resumePdf from '../../Archita-Malviya-Resume.pdf';

const SideBar = () => (
  <Card className="overflow-hidden border-border/60 bg-card shadow-sm">
    <CardHeader className="flex flex-col space-y-5 border-b-0 px-6 pb-0 pt-6 sm:px-8">
      <div className="flex justify-center">
        <Link
          to="/"
          className="group block shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        >
          <div className="relative h-36 w-36 overflow-hidden rounded-full bg-muted/50 shadow-inner ring-2 ring-primary/20 ring-offset-[3px] ring-offset-card sm:h-40 sm:w-40">
            <img
              src={myPic}
              alt="Archita Malviya"
              width={160}
              height={160}
              className="h-full w-full min-h-0 min-w-0 object-cover object-center"
            />
          </div>
        </Link>
      </div>
      <div className="space-y-1.5 text-center">
        <CardTitle className="sidebar-title">Archita Malviya</CardTitle>
        <p className="text-sm text-muted-foreground">
          <a
            href="mailto:archi.m8@gmail.com"
            className="transition-colors hover:text-primary"
          >
            archi.m8@gmail.com
          </a>
        </p>
      </div>
    </CardHeader>
    <Separator />
    <CardContent className="page-card-body-tight">
      <div>
        <h2 className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          About
        </h2>
        <p className="page-body-text">
          Hi, I&apos;m Archita. I am a Creative and strategic Marketing and
          Content Specialist with 5+ years of experience across B2B SaaS, D2C,
          and agency ecosystems. Proven expertise in leading cross-functional
          teams, developing full-funnel marketing and content strategies,
          executing social media campaigns, and building brands from scratch.
          Adept at storytelling, brand positioning, and creating user-centric
          content that drives engagement, conversions, and growth.
        </p>
      </div>
      <Button
        variant="default"
        className="w-full font-display"
        size="default"
        asChild
      >
        <a href={resumePdf} target="_blank" rel="noopener noreferrer">
          View resume
        </a>
      </Button>
    </CardContent>
    <CardFooter className="flex flex-col gap-4 px-6 pb-6 pt-0 sm:px-8">
      <Separator />
      <ContactIcons />
      <p className="text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Archita Malviya. All rights reserved.
      </p>
    </CardFooter>
  </Card>
);

export default SideBar;
