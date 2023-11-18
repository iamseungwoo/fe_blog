'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type Theme = 'light' | 'dark';

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onClickToggle = () => {
    console.log(theme === 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div onClick={onClickToggle} className="p-2">
      {theme !== 'dark' ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default Toggle;
