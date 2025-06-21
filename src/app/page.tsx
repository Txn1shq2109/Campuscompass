"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { OpportunityCard } from '@/components/opportunity-card';
import { initialOpportunities } from '@/lib/data';
import type { Opportunity } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ListFilter, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<string[]>('bookmarkedOpportunities', []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    domain: 'all',
    mode: 'all',
  });

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

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(op => {
      const searchTermMatch = op.title.toLowerCase().includes(searchTerm.toLowerCase()) || op.company.toLowerCase().includes(searchTerm.toLowerCase());
      const typeMatch = filters.type === 'all' || op.type === filters.type;
      const domainMatch = filters.domain === 'all' || op.domain === filters.domain;
      const modeMatch = filters.mode === 'all' || op.mode === filters.mode;
      return searchTermMatch && typeMatch && domainMatch && modeMatch;
    });
  }, [opportunities, searchTerm, filters]);

  const handleFilterChange = (filterName: 'type' | 'domain' | 'mode') => (value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const uniqueValues = (key: keyof Opportunity) => {
    return ['all', ...Array.from(new Set(initialOpportunities.map(op => op[key])))]
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Opportunities</h1>
        <p className="text-muted-foreground">Find your next internship, hackathon, or scholarship here.</p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative md:col-span-2 lg:col-span-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title or company..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select onValueChange={handleFilterChange('type')} value={filters.type}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                {uniqueValues('type').map(type => (
                   <SelectItem key={type} value={type}>{type === 'all' ? 'All Types' : type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={handleFilterChange('domain')} value={filters.domain}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by domain" />
              </SelectTrigger>
              <SelectContent>
                {uniqueValues('domain').map(domain => (
                  <SelectItem key={domain} value={domain}>{domain === 'all' ? 'All Domains' : domain}</SelectItem>
                ))}
              </SelectContent>
            </Select>
             <Select onValueChange={handleFilterChange('mode')} value={filters.mode}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by mode" />
              </SelectTrigger>
              <SelectContent>
                {uniqueValues('mode').map(mode => (
                   <SelectItem key={mode} value={mode}>{mode === 'all' ? 'All Modes' : mode}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      {filteredOpportunities.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredOpportunities.map(op => (
            <OpportunityCard key={op.id} opportunity={op} onBookmarkToggle={handleBookmarkToggle} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg font-semibold">No opportunities found</p>
          <p className="text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
