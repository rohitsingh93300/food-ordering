import Link from "next/link"

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
      <Link className="text-primary font-semibold text-2xl" href={'/'}>PizzaHut</Link>
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
      </nav>
      <nav className="flex gap-4 font-semibold text-gray-500 items-center">
        <Link href={'login'}>Login</Link>
        <Link href={'/register'} className="bg-primary px-8 py-2 text-white rounded-full">Register</Link>
      </nav>
     </header>
  )
}

export default Header
