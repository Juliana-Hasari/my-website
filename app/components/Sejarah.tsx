import Image from "next/image";

export default function Sejarah() {
  return (
    <section id="sejarah" className="py-20 bg-gray-100"> {/* Tambahkan bg-gray-100 di sini */}
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 pr-8 text-black">
          <h2 className="text-3xl font-bold mb-4 ">Sejarah Gampong</h2>
          <p>
          Gampong Tanjong Hagu adalah salah satu gampong yang terletak di Kecamatan Peukan Baro, Kabupaten Pidie, Provinsi Aceh, Indonesia. Gampong ini memiliki sejarah panjang yang mencerminkan kekayaan budaya dan tradisi masyarakat Aceh. Berdasarkan cerita turun-temurun dari para tetua desa, Gampong Tanjong Hagu didirikan pada abad ke-18 oleh sekelompok masyarakat yang bermigrasi dari daerah pesisir Aceh. Mereka mencari tempat yang subur dan aman untuk membangun kehidupan baru.
          </p>
          <p>
          Nama "Tanjong Hagu" sendiri berasal dari dua kata dalam bahasa Aceh, yaitu "Tanjong" yang berarti tanjung atau daratan yang menjorok ke laut, dan "Hagu" yang berarti pohon asam. Konon, pada masa awal pembukaan gampong, terdapat sebuah tanjung yang ditumbuhi oleh pohon asam besar yang menjadi penanda lokasi ini. Pohon tersebut menjadi tempat berteduh dan berkumpulnya masyarakat saat itu.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src="/Tugu selamat datang.jpg?height=300&width=400"
            alt="Sejarah Gampong Tanjong Hagu"
            width={700}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}