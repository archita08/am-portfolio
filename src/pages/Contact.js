import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Linkedin, Mail, Phone } from 'lucide-react';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'components/ui/card';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Archita Malviya via email @ archi.m8@gmail.com"
  >
    <Card className="animate-fade-in overflow-hidden border-border/70 shadow-sm motion-reduce:animate-none">
      <CardHeader className="page-card-header">
        <CardTitle className="page-card-title">
          <Link to="/contact">Contact</Link>
        </CardTitle>
        <CardDescription className="page-card-subtitle">
          Let&apos;s talk about your next content or growth initiative.
        </CardDescription>
      </CardHeader>
      <CardContent className="page-card-body space-y-8">
        <div className="space-y-3">
          <p className="page-lead">Let&apos;s build your next success story</p>
          <p>
            Ready to supercharge your content, SEO, and growth? I&apos;d love to
            hear about your goals and explore how we can work together.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Details
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Mail
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden
              />
              <span>
                <EmailLink />
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden
              />
              <a
                href="tel:+919754314991"
                className="transition-colors hover:text-primary"
              >
                +91 97543 14991
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Linkedin
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden
              />
              <a
                href="https://www.linkedin.com/in/archita-m-936388229"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                LinkedIn profile
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Calendar
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden
              />
              <a
                href="https://calendly.com/archi-m8/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
        <ContactIcons />
      </CardContent>
    </Card>
  </Main>
);

export default Contact;
