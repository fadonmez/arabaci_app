import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FcCheckmark } from 'react-icons/fc';

const Thanks = async ({ params }: any) => {
  const session = await auth();
  if (!session) {
    redirect('/sign-in');
  }
  return (
    <div className='flex flex-col gap-y-4 items-center justify-center h-screen'>
      <div className='rounded-full bg-green-200 p-4'>
        <FcCheckmark size={128} />
      </div>
      <h1 className='text-2xl font-semibold'>
        {params.id} numaralı rezervasyon Başarılı!
      </h1>
      <p>Rezervasyonun için teşekkür ederiz. Bayimize bekleriz.</p>
      <Link href='/home'>
        <Button>Ana sayfaya dön</Button>
      </Link>
    </div>
  );
};

export default Thanks;
