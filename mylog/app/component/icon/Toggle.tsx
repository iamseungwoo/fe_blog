'use client';

import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const TOGGLE = {
  Light: 'light',
  Dark: 'dark',
} as const;

type TOGGLE = (typeof TOGGLE)[keyof typeof TOGGLE];

const Toggle = () => {
  
  const [toggle, setToggle] = useState<TOGGLE | string>();

  useEffect(() => {
    const theme: string | null = sessionStorage.getItem('theme') || 'light';
    setToggle(theme);
    document.body.className = theme;
  });

  const darkMode = () => {
    window.sessionStorage.setItem('theme', TOGGLE.Dark);
    document.body.className = TOGGLE.Dark;
  };

  const lightMode = () => {
    sessionStorage.setItem('theme', TOGGLE.Light);
    document.body.className = TOGGLE.Light;
  };

  const onClickToggle = () => {
    setToggle(toggle == TOGGLE.Light ? TOGGLE.Dark : TOGGLE.Light);
    toggle === TOGGLE.Light ? darkMode() : lightMode();
  };

  return (
    <div onClick={onClickToggle}>
      {toggle === TOGGLE.Light ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default Toggle;
