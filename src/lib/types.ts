export type Opportunity = {
  id: string;
  title: string;
  company: string;
  type: 'Internship' | 'Hackathon' | 'Scholarship' | 'Competition';
  domain: 'Tech' | 'Business' | 'Design' | 'Marketing' | 'Science';
  mode: 'Remote' | 'On-site' | 'Hybrid';
  deadline: string;
  description: string;
  url: string;
  logoUrl?: string;
  isBookmarked?: boolean;
};

export type UserProfile = {
  id: string;
  name: string;
  avatarUrl: string;
  headline: string;
  skills: string[];
  interests: string[];
  major: string;
  bio: string;
};
