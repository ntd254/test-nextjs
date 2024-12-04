import Link from 'next/link';
import { PropsWithChildren, useEffect, useState } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    }
  }, []);

  console.log('firstRender:', firstRender);

  return (
    <div>
      <Link href="/test1">Test1</Link>
      <Link href="/test">Test</Link>
      {children}
    </div>
  );
};
