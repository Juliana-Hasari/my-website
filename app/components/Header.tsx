import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-200 bg-opacity-80 text-black p-4 fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Gampong Tanjong Hagu
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#sejarah" className="hover:text-gray-600">
              Sejarah
            </Link>
          </li>
          <li>
            <Link href="#dusun" className="hover:text-gray-600">
              Dusun
            </Link>
          </li>
          <li>
            <Link href="#organisasi" className="hover:text-gray-600">
              Organisasi
            </Link>
          </li>
          <li>
            <Link href="#visi-misi" className="hover:text-gray-600">
              Visi Misi
            </Link>
          </li>
          <li>
            <Link href="#kegiatan" className="hover:text-gray-600">
              Kegiatan
            </Link>
          </li>
          <li>
            <Link href="#peta" className="hover:text-gray-600">
              Peta
            </Link>
          </li>
          <li>
            <Link href="#kontak" className="hover:text-gray-600">
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

