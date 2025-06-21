"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Bookmark, CalendarDays, ExternalLink } from 'lucide-react';
import type { Opportunity } from '@/lib/types';
import { format, parseISO } from 'date-fns';

type OpportunityCardProps = {
  opportunity: Opportunity;
  onBookmarkToggle: (id: string) => void;
};

export function OpportunityCard({ opportunity, onBookmarkToggle }: OpportunityCardProps) {
  const { id, title, company, type, domain, mode, deadline, logoUrl, url, isBookmarked } = opportunity;
  
  const formattedDeadline = format(parseISO(deadline), 'MMM d, yyyy');

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
      <CardHeader className="flex flex-row items-start gap-4 p-4">
        {logoUrl && (
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image 
              src={logoUrl} 
              alt={`${company} logo`} 
              layout="fill" 
              objectFit="contain" 
              className="rounded-md"
              data-ai-hint="company logo"
            />
          </div>
        )}
        <div className="flex-grow">
          <CardTitle className="text-base font-bold">{title}</CardTitle>
          <CardDescription className="text-sm">{company}</CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="flex-shrink-0"
          onClick={() => onBookmarkToggle(id)}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
        </Button>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <div className="flex flex-wrap gap-2 text-xs">
          <Badge variant="secondary">{type}</Badge>
          <Badge variant="outline">{domain}</Badge>
          <Badge variant="outline">{mode}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-muted/50 p-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>{formattedDeadline}</span>
        </div>
        <Button asChild size="sm" variant="default">
          <Link href={url} target="_blank" rel="noopener noreferrer">
            Apply
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
