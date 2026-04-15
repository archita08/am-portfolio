import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Archita Malviya"
      defaultTitle="Archita Malviya"
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <Navigation />
    <div
      id="site-root"
      className="site-shell mx-auto flex min-h-[calc(100vh-var(--site-header-h))] w-full max-w-[96rem] flex-col items-start gap-6 px-3 pb-12 pt-[calc(env(safe-area-inset-top,0px)+var(--site-header-h)+var(--site-content-gap))] sm:px-5 md:gap-8 md:px-8 lg:flex-row lg:gap-10 lg:px-10 lg:pb-16"
    >
      <main
        id="main"
        className="animate-fade-in order-1 w-full min-w-0 flex-1 py-4 motion-reduce:animate-none sm:py-5 lg:order-2 lg:py-6"
      >
        {props.children}
      </main>
      {props.fullPage ? null : (
        <aside className="order-2 w-full shrink-0 py-4 sm:py-5 lg:order-1 lg:w-[min(26rem,100%)] lg:max-w-[26rem] lg:flex-shrink-0 lg:self-start lg:py-6">
          <div className="animate-fade-in-slow w-full motion-reduce:animate-none lg:sticky lg:top-[var(--site-sticky-top)] lg:pb-[max(0.25rem,env(safe-area-inset-bottom,0px))]">
            <SideBar />
          </div>
        </aside>
      )}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Archita Malviya's personal Portfolio.",
};

export default Main;
