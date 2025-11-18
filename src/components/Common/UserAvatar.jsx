import React from 'react';
import { User } from 'lucide-react';

const UserAvatar = () => (
  <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
    <User className="w-5 h-5 text-slate-300" />
  </div>
);

export default UserAvatar;