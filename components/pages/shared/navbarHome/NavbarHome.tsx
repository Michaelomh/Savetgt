import Link from 'next/link';

const NavbarHome = () => {
  return(
    <nav className="flex justify-between items-center w-full mb-8 mt-3 px-8">
      <div>
        <Link href="/">Temp Logo for now</Link>
      </div>
      
      <div className="flex gap-3 items-center">
        <Link href="/auth/login">Login</Link>
        <Link href="/">Dashboard</Link>
      </div>
    </nav>
  )
}


export default NavbarHome