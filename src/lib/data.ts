import type { Opportunity, UserProfile } from './types';

export const initialOpportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'Innovatech',
    type: 'Internship',
    domain: 'Tech',
    mode: 'Remote',
    deadline: '2024-09-15',
    description: 'Work on cutting-edge projects and develop your coding skills with our experienced team of engineers.',
    url: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: '2',
    title: 'Hack for Good',
    company: 'CodeConnect',
    type: 'Hackathon',
    domain: 'Tech',
    mode: 'On-site',
    deadline: '2024-08-20',
    description: 'A 24-hour hackathon focused on creating solutions for social and environmental challenges. Prizes and networking opportunities.',
    url: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: '3',
    title: 'Future Leaders Scholarship',
    company: 'BrightSpire Foundation',
    type: 'Scholarship',
    domain: 'Business',
    mode: 'Hybrid',
    deadline: '2024-10-01',
    description: 'A scholarship for undergraduate students demonstrating exceptional leadership potential in business and community service.',
    url: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: '4',
    title: 'Product Design Intern',
    company: 'PixelPerfect',
    type: 'Internship',
    domain: 'Design',
    mode: 'Remote',
    deadline: '2024-09-01',
    description: 'Join our design team to create intuitive and beautiful user interfaces for our suite of products.',
    url: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: '5',
    title: 'Digital Marketing Apprentice',
    company: 'Growth Gurus',
    type: 'Internship',
    domain: 'Marketing',
    mode: 'On-site',
    deadline: '2024-08-30',
    description: 'Learn the ins and outs of digital marketing, from SEO to social media campaigns, in a fast-paced environment.',
    url: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
  {
    id: '6',
    title: 'AI Innovation Challenge',
    company: 'DataDriven Inc.',
    type: 'Competition',
    domain: 'Tech',
    mode: 'Remote',
    deadline: '2024-11-05',
    description: 'Compete to build the most innovative AI model for a real-world dataset. Top teams win cash prizes and an interview.',
    url: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
   {
    id: '7',
    title: 'Biotech Research Grant',
    company: 'BioGen Futures',
    type: 'Scholarship',
    domain: 'Science',
    mode: 'Hybrid',
    deadline: '2024-12-01',
    description: 'Funding for students conducting research in biotechnology and life sciences. Open to undergrad and grad students.',
    url: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  },
   {
    id: '8',
    title: 'UX/UI Design Competition',
    company: 'Creative Minds',
    type: 'Competition',
    domain: 'Design',
    mode: 'Remote',
    deadline: '2024-09-25',
    description: 'Showcase your design skills by redesigning a popular app. Judged by industry experts.',
    url: '#',
    logoUrl: 'https://placehold.co/100x100.png',
  }
];

export const users: UserProfile[] = [
  {
    id: 'user-1',
    name: 'Alex Doe',
    avatarUrl: 'https://placehold.co/128x128.png',
    headline: 'Aspiring Full-Stack Developer | CS Student',
    skills: ['React', 'Node.js', 'Python', 'UI/UX Design', 'SQL'],
    interests: ['AI Ethics', 'Open Source', 'Hackathons', 'Creative Coding'],
    major: 'Computer Science',
    bio: 'Third-year Computer Science student passionate about building scalable web applications and exploring the intersection of technology and social good. Always looking to collaborate on exciting projects!'
  },
  {
    id: 'user-2',
    name: 'Brenda Smith',
    avatarUrl: 'https://placehold.co/128x128.png',
    headline: 'Marketing Strategist & Content Creator',
    skills: ['SEO', 'Content Marketing', 'Social Media', 'Analytics', 'Brand Strategy'],
    interests: ['Sustainable Brands', 'Digital Storytelling', 'Startup Culture'],
    major: 'Business Administration',
    bio: 'I thrive on creating data-driven marketing campaigns that resonate with audiences. Currently exploring how brands can leverage new media to create authentic connections. Let\'s talk about growth!'
  },
  {
    id: 'user-3',
    name: 'Charlie Day',
    avatarUrl: 'https://placehold.co/128x128.png',
    headline: 'UX/UI Designer with a love for mobile apps',
    skills: ['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Design Systems'],
    interests: ['Minimalism', 'Accessibility', 'Mobile Gaming'],
    major: 'Interaction Design',
    bio: 'Designing user-centric experiences is my calling. I focus on creating intuitive and beautiful interfaces that solve real-world problems. Currently obsessed with micro-interactions and design systems.'
  },
  {
    id: 'user-4',
    name: 'Diana Prince',
    avatarUrl: 'https://placehold.co/128x128.png',
    headline: 'Biotechnology Researcher & Future Scientist',
    skills: ['CRISPR', 'Lab Research', 'Data Analysis', 'Scientific Writing'],
    interests: ['Genomics', 'Sustainable Agriculture', 'Bioinformatics'],
    major: 'Molecular Biology',
    bio: 'Dedicated researcher with hands-on experience in genetic engineering techniques. My goal is to contribute to scientific breakthroughs that improve human health and the environment.'
  }
];

export const notifications = [
  {
    id: '1',
    title: 'Deadline Approaching',
    description: 'Your saved opportunity "Software Engineering Intern" deadline is in 5 days.',
    date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: '2',
    title: 'New Hackathon Posted',
    description: 'A new hackathon in the "Tech" category has been posted: "CodeFest 2024".',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
  {
    id: '3',
    title: 'Application Viewed',
    description: 'Your application for "Product Design Intern" was viewed by PixelPerfect.',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
  }
]
