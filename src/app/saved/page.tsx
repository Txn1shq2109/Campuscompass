"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { OpportunityCard } from '@/components/opportunity-card';
import { initialOpportunities } from '@/lib/data';
import type { Opportunity } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Bookmark } from 'lucide-react';

export default function SavedPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<string[]>('bookmarkedOpportunities', []);

  useEffect(() => {
    const opportunitiesWithBookmarks = initialOpportunities.map(op => ({
      ...op,
      isBookmarked: bookmarkedIds.includes(op.id),
    }));
    setOpportunities(opportunitiesWithBookmarks);
  }, [bookmarkedIds]);

  const handleBookmarkToggle = (id: string) => {
    setBookmarkedIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds.filter(prevId => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };
  
  const savedOpportunities = useMemo(() => {
    return opportunities.filter(op => op.isBookmarked);
  }, [opportunities]);

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex items-center gap-4">
        <Bookmark className="h-6 w-6" />
        <h1 className="text-2xl font-bold tracking-tight">Saved Opportunities</h1>
      </div>
      
      {savedOpportunities.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {savedOpportunities.map(op => (
            <OpportunityCard key={op.id} opportunity={op} onBookmarkToggle={handleBookmarkToggle} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-12 border-2 border-dashed rounded-lg">
          <Bookmark className="h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-lg font-semibold">No Saved Opportunities</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Click the bookmark icon on an opportunity to save it for later.
          </p>
        </div>
      )}
    </div>
  );
}
