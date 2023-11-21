'use client';

import navlinks from '@/app/data/navlinks';
import Link from 'next/link';
import Toggle from '../icon/Toggle';
import { getAuth } from '@/app/api/auth/auth';
import { useEffect, useState } from 'react';
import SignInBtn from './SignInBtn';
import SignOutBtn from './SignOutBtn';

const Nav = () => {
  const [auth, setAuth] = useState('');

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setAuth(localStorage.getItem('accessToken') || '');
    }
  }, []);

  const signOut = () => {
    setAuth('');
  };

  return (
    <div className={`ml-auto flex items-center gap-2 py-3`}>
      {navlinks.map(nav => (
        <Link
          href={nav.link}
          key={nav.title}
          className={`
                        px-3 hoveflex items-center rounded-lg transition-all hover:bg-secondary text-primary font-semibold px-3 py-1.5r:bg-secondary
                `}
        >
          {nav.title}
        </Link>
      ))}
      {auth ? <SignOutBtn onSignout={signOut} /> : <SignInBtn />}
      <Toggle />
    </div>
  );
};

export default Nav;
