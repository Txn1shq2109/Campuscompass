"use client";

import React, { useState, useMemo } from 'react';
import { UserProfileCard } from '@/components/user-profile-card';
import { users } from '@/lib/data';
import type { UserProfile } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Search, Users } from 'lucide-react';

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      user.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
            <Users className="h-6 w-6" />
            <h1 className="text-2xl font-bold tracking-tight">Community Hub</h1>
        </div>
        <p className="text-muted-foreground">Connect with peers, mentors, and collaborators.</p>
      </div>
      
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, skill, or interest..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredUsers.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredUsers.map(user => (
            <UserProfileCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg font-semibold">No users found</p>
          <p className="text-muted-foreground">Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  );
}
