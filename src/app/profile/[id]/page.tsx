import { users } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Briefcase, Sparkles, Lightbulb } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ProfilePageProps = {
  params: {
    id: string;
  };
};

export default function ProfilePage({ params }: ProfilePageProps) {
  const user = users.find(u => u.id === params.id);

  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-6">
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary/50 to-accent/50" />
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 -mt-20">
            <Avatar className="h-32 w-32 border-4 border-card ring-2 ring-primary">
              <AvatarImage src={user.avatarUrl} alt={`${user.name}'s avatar`} data-ai-hint="person face" />
              <AvatarFallback className="text-4xl">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow pt-16 sm:pt-0">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">{user.headline}</p>
            </div>
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Connect
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-wrap">{user.bio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary"/> Skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {user.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>
                  ))}
                </CardContent>
              </Card>

            </div>

            <div className="space-y-6">
               <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Lightbulb className="text-primary"/> Interests</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {user.interests.map(interest => (
                    <Badge key={interest} variant="outline">{interest}</Badge>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Briefcase className="text-primary"/> Major</CardTitle>
                </Header>
                <CardContent>
                  <p className="text-lg font-semibold">{user.major}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
