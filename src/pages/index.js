import React from 'react';
import Link from 'next/link';

import { Title } from '../ui';

export default function Home() {
  return (
    <>
      <Title>My page</Title>
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
