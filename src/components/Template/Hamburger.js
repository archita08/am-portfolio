import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from 'components/ui/button';
import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const drawer =
    open &&
    typeof document !== 'undefined' &&
    createPortal(
      <>
        <div
          className="fixed inset-0 z-[10050] bg-foreground/25 backdrop-blur-[2px] md:hidden"
          role="presentation"
          aria-hidden
          onClick={() => setOpen(false)}
        />
        <aside
          className="fixed inset-y-0 right-0 z-[10051] flex w-[min(19rem,88vw)] flex-col border-l border-border/50 bg-card shadow-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className="flex-1 overflow-y-auto overscroll-contain px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
            <ul className="space-y-0.5">
              {routes.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-sans text-base font-normal leading-snug text-foreground transition-colors hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </>,
      document.body,
    );

  return (
    <>
      <div className="hamburger-container relative z-[10001] flex items-center md:hidden">
        <nav className="main flex items-center" id="hambuger-nav" aria-label="Menu">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
      {drawer}
    </>
  );
};

export default Hamburger;
