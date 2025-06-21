"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import type { UserProfile } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

type UserProfileCardProps = {
  user: UserProfile;
};

export function UserProfileCard({ user }: UserProfileCardProps) {
  const { id, name, avatarUrl, headline, skills } = user;

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
      <CardContent className="p-6 flex flex-col items-center text-center flex-grow">
        <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
          <AvatarImage src={avatarUrl} alt={`${name}'s avatar`} data-ai-hint="person face" />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="text-sm mt-1 mb-4 h-10">{headline}</CardDescription>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
          {skills.length > 4 && <Badge variant="outline">+{skills.length - 4} more</Badge>}
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4">
        <Button asChild className="w-full">
          <Link href={`/profile/${id}`}>
            View Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
