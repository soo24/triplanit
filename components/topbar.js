import Link from 'next/link';
import Image from 'next/image'
import Logo from '../public/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';

export default function TopBar() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className='bg-blue-200 pt-6 pl-6w-full'>
      <div className="grid grid-cols-12  grid-rows-2 ml-5 zf:grid-cols-4 ">

        <div className='col-start-1 col-span-2 ml-3'>
          <Link href='/'>
            <Image src={Logo} alt="logo" height={30} width={150} />
          </Link>
        </div>



        <div className='col-start-3 col-span-3'>
          <form>
            <input type="text" id="search" name="search" required minLength="1"
              placeholder=" π κ²μ" style={{ width: 350, height: 30 }} />


          </form>
        </div>


          <div className="col-start-11 zf:col-start-3 text-center"> 
            <button type='button' onClick={() => router.push('/login')}> 
              λ‘κ·ΈμΈ
            </button>
          </div>

          <div className="col-start-12 rounded-[5px] bg-white text-center w-9/12 mb-5 zf:hidden"> 
            <button > 
              νμκ°μ
            </button>
          </div>


        <div className='col-start-1  ml-3 hover:cursor-pointer' >
          <Link href='/travelRegister'>
            <div>
              <FontAwesomeIcon icon={faCalendarDays} size='lg' className='mr-2' />
              μ¬ν λ±λ‘
            </div>
          </Link>
        </div>

        <div className='col-start-2 ml-3 hover:cursor-pointer'>
          <Link href='/recommendation'>
            <div>
              <FontAwesomeIcon icon={faLocationDot} size='lg' className='mr-2' />
              μ¬νμ§ μΆμ²
            </div>
          </Link>
        </div>
        
        <div className='col-start-3 col-span-2 ml-5 hover:cursor-pointer'>
        {session? <Link href='/myPage'><div>
              <FontAwesomeIcon icon={faUser} size='lg' className='mr-2' />
              λ΄ μ λ³΄
            </div>
          </Link>:<Link href='/login'><div>
              <FontAwesomeIcon icon={faUser} size='lg' className='mr-2' />
              λ΄ μ λ³΄
            </div>
          </Link>
          }
        </div>

      </div>
    </div>

  );
}
