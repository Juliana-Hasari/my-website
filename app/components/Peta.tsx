import Image from "next/image";

export default function PembagianWilayah() {
  console.log("Rendering Peta Component");
  return (
    <section id="peta" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Peta Gampong Tanjong Hagu</h2>
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Gampong Tanjong Hagu_2.jpg" // Pastikan file ini ada di folder `public`
            alt="Pembagian Wilayah Dusun Gampong Tanjong Hagu"
            width={1200} // Atur lebar gambar (dalam piksel)
            height={600} // Atur tinggi gambar (dalam piksel)
            className="w-full h-auto" // Gambar akan menyesuaikan lebar container
            style={{ objectFit: "contain" }} // Gambar akan diisi sesuai ukuran yang ditentukan
          />
        </div>
      </div>
    </section>
  );
}