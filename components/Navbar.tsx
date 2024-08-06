import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex w-full shadow items-center h-12 p-2 fixed top-0 bg-white">
        <Link href="/" className="flex items-center">
            <p>Form</p>
            <p className="bg-orange-400 px-1 shadow-inner rounded">Hub</p>
        </Link>
    </nav>
  )
}

export default Navbar