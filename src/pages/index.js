import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Login from './Login';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SyncZone</title>
        <meta name="description" content="SyncZone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Login />

    </>
  )
}
