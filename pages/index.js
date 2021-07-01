import Head from 'next/head';
import Image from 'next/image';

import Products from '../components/Products';

export default function Home() {
  return (
      <div>
          <Head>
              <title> TeslaSteel | Оранжерии</title>
          </Head>
        <main class="content">
            <Products />
        </main>
      </div>
  )
}
