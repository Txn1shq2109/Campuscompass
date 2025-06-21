"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { getRecommendedOpportunities } from '@/app/actions';
import { Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';

type OpportunityFinderDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function OpportunityFinderDialog({ open, onOpenChange }: OpportunityFinderDialogProps) {
  const [interests, setInterests] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!interests.trim()) {
      setError('Please enter your interests and skills.');
      return;
    }
    setError('');
    setIsLoading(true);
    setRecommendations('');

    try {
      const result = await getRecommendedOpportunities({ interestsAndSkills: interests });
      if (result.opportunities) {
        setRecommendations(result.opportunities);
      } else {
        setError('Could not find opportunities. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="text-primary" />
            Opportunity Finder
          </DialogTitle>
          <DialogDescription>
            Describe your interests, skills, or dream job, and our AI will find relevant opportunities for you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="interests">Your Interests & Skills</Label>
              <Textarea
                id="interests"
                placeholder="e.g., 'I am interested in web development with React, enjoy UI/UX design, and have experience with Python for data analysis.'"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                rows={4}
              />
               {error && <p className="text-sm text-destructive">{error}</p>}
            </div>
            
            {isLoading && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            )}

            {recommendations && !isLoading && (
              <div>
                <Label>AI Recommendations</Label>
                <Card className="mt-2 max-h-60 overflow-y-auto">
                    <CardContent className="p-4 text-sm whitespace-pre-wrap font-mono">
                        {recommendations}
                    </CardContent>
                </Card>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Finding...' : 'Find Opportunities'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
