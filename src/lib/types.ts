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
