import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';
import Hamburger from './Hamburger';
import routes from '../../data/routes';

const Navigation = () => {
  const { pathname } = useLocation();
  const indexRoute = routes.find((l) => l.index);

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[10000] h-[var(--site-header-h)] border-b border-border/50 bg-background/92 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-full max-w-[96rem] items-center justify-between gap-3 px-3 sm:gap-4 sm:px-5 md:px-8 lg:px-10">
        <h1 className="index-link m-0 flex min-h-0 min-w-0 items-center p-0 font-display text-[11px] font-bold uppercase leading-none tracking-[0.12em] text-foreground sm:text-xs md:text-sm">
          {indexRoute && (
            <Link
              to={indexRoute.path}
              className="line-clamp-2 max-w-[10rem] text-foreground transition-colors hover:text-primary sm:max-w-[14rem] md:max-w-none md:line-clamp-none"
            >
              {indexRoute.label}
            </Link>
          )}
        </h1>
        <nav
          className="links hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <Button
                key={l.label}
                variant="ghost"
                size="sm"
                className={cn(
                  'h-8 rounded-full px-2.5 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors sm:h-9 sm:px-3 sm:text-[11px]',
                  'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                  isActive(l.path) &&
                    'bg-muted/90 font-semibold text-foreground shadow-none ring-1 ring-border/70 hover:bg-muted',
                )}
                asChild
              >
                <Link to={l.path}>{l.label}</Link>
              </Button>
            ))}
        </nav>
        <Hamburger />
      </div>
    </header>
  );
};

export default Navigation;
