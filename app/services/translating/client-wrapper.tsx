'use client';

import dynamic from 'next/dynamic';

const TranslatingClient = dynamic(() => import('./TranslatingClient'), {
  ssr: false,
});

export default function Page() {
  return <TranslatingClient />;
}
