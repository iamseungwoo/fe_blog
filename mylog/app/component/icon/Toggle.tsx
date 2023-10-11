'use client';

import { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const TOGGLE = {
  Light: 'light',
  Dark: 'dark',
} as const;

type TOGGLE = (typeof TOGGLE)[keyof typeof TOGGLE];

const Toggle = () => {
  const [toggle, setToggle] = useState<TOGGLE>(TOGGLE.Light);

  const onClickToggle = () => {
    setToggle(toggle == TOGGLE.Light ? TOGGLE.Dark : TOGGLE.Light);
  }

  return <div onClick={onClickToggle}>{toggle === TOGGLE.Light ? <BsSun /> : <BsMoon />}</div>;
};

export default Toggle;
