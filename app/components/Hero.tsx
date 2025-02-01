import Image from "next/image";

export default function Hero() {
  console.log("Rendering Hero Component");
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Wrapper untuk menampung gambar dan gradasi */}
      <div className="absolute inset-0">
        {/* Gambar Background */}
        <Image
          src="/Gampong.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Overlay Gradasi */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-60" />
      </div>
      
      {/* Konten Teks */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Selamat Datang di Gampong Tanjong Hagu
        </h1>
        <p className="text-xl drop-shadow-md">
          Tanjong Hagu adalah salah satu gampong di Kecamatan Peukan Baro, Kabupaten Pidie, Provinsi Aceh, Indonesia.
        </p>
      </div>
    </section>
  );
}
