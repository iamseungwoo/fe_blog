'use client';

import dynamic from 'next/dynamic';

const Tui = dynamic(() => import('../component/Editor/Tui'), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <Tui />
    </div>
  );
}
