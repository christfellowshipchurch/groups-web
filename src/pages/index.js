import React from 'react';
import Link from 'next/link';

import { H1 } from '../ui-kit';

export default function Home() {
  return (
    <>
      <H1>My page</H1>
      <ul>
        <li>
          <Link href="/boom">
            <a>Boom</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
