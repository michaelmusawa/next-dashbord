
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import '@/app/page.scss'
 
export default function Page() {
  return (
    <main>
      <div>
        <div className="logo-wrapper">
          <Link href='/'>
            <Image
              src="/images/logo.png"
              width={70}
              height={100}
              alt="logo of the site"
            />
            Acme
          </Link>
        </div>

        <div className="something">
          <div className="content">
            <p className={lusitana.className} >
              <strong>Welcome to Acme.</strong> This is the example for the{' '}
              <a href="https://nextjs.org/learn/">
                Next.js Learn Course
              </a>
              , brought to you by Vercel.
            </p>
            <button>login</button>
          </div>
         
          <div>
            <Image
              src="/images/acme.png"
              width={1000}
              height={760}
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>  
        </div>      
      </div>
    </main>
  );
}