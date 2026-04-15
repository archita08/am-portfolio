import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { Button } from 'components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'components/ui/card';

const PageNotFound = () => (
  <Main title="404 Not Found" fullPage description="The content you are looking for cannot be found.">
    <Card className="mx-auto max-w-lg animate-fade-in border-border/70 text-center shadow-sm motion-reduce:animate-none">
      <CardHeader className="page-card-header items-center text-center">
        <CardTitle className="page-card-title text-3xl">Page not found</CardTitle>
        <CardDescription className="page-card-subtitle max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </CardDescription>
      </CardHeader>
      <CardContent className="page-card-body flex flex-col items-center pb-10">
        <Button variant="default" asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </CardContent>
    </Card>
  </Main>
);

export default PageNotFound;
