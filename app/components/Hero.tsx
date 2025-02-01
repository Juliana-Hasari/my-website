import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image src="/Gampong.jpg" alt="Hero Background" layout="fill" objectFit="cover" priority />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Selamat Datang di Gampong Tanjong Hagu</h1>
        <p className="text-xl">Tanjong Hagu adalah salah satu gampong di Kecamatan Peukan Baro, Kabupaten Pidie, Provinsi Aceh, Indonesia.</p>
      </div>
    </section>
  )
}

