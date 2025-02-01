import Image from "next/image";

export default function Kegiatan() {
  const kegiatanList = [
    { nama: "Desa KKN", gambar: "/Gampong.jpg?height=200&width=300" },
    {
      nama: "Kegiatan Posiandu",
      gambar: "/kegiatan1.jpg?height=200&width=300",
    },
    { nama: "Pengajian Rutin", gambar: "/kegiatan2.jpg?height=200&width=300" },
  ];

  return (
    <section id="kegiatan" className="py-20 bg-gray-500">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Kegiatan Rutin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kegiatanList.map((kegiatan, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4 bg-gray-200 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <Image
                  src={kegiatan.gambar || "/hero-background.svg"}
                  alt={kegiatan.nama}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {kegiatan.nama}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
