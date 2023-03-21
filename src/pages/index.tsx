import Head from 'next/head';
import LayoutMenu from '@/components/LayoutMenu';

export default function Home() {
  return (
    <>
      <Head>
        <title>易拼图</title>

        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative flex h-screen w-full flex-col gap-4 bg-gray-100'>
        <header className='sticky top-0 flex h-16 w-full border-t-4 border-t-blue-500 bg-white'>
          <div className='mx-auto flex w-full items-center justify-between px-10'>
            <h1 className='text-xl font-semibold'>易拼图</h1>
            <button className='rounded-3xl border border-blue-500 bg-blue-500 py-2 px-5 font-semibold text-white hover:bg-blue-600 active:bg-blue-700'>
              下载
            </button>
          </div>
        </header>
        <main className='flex w-full flex-1 gap-4 overflow-hidden bg-gray-100'>
          <div className='flex h-full flex-shrink-0'>
            <LayoutMenu />
          </div>
          <div className='relative flex flex-1 items-center justify-center overflow-hidden'></div>
          <div className='w-96 flex-shrink-0 bg-white'></div>
        </main>
      </div>
    </>
  );
}
