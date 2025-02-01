import Image from "next/image";

export default function Sejarah() {
  console.log("Rendering Sejarah Component");
  return (
    <section id="sejarah" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start px-4 md:px-0 space-y-6 md:space-y-0">
        {/* Gambar */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Tugu selamat datang.jpg"
            alt="Sejarah Gampong Tanjong Hagu"
            width={700}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Teks */}
        <div className="w-full md:w-1/2 md:pl-8 text-black">
          <h2 className="text-3xl font-bold mb-4">Sejarah Gampong</h2>
          <p className="text-justify">
            Nama Tanjong Hagu berawal dari pedalaman dan pohon, rumah penduduk kala itu banyak di Tanjong, bukan di pinggiran jalan Madan. 
            Di daerah Tanjong pada saat itu banyak ditumbuhi pepohonan besar nan lebat, nama pohon tersebut adalah Hagu. 
            Oleh karena itu masyarakat yang kala itu mendiami daerah tersebut menyatukan dua kata, yakni Tanjong dan Hagu, 
            sehingga daerah tersebut dikenal sebagai Gampong Tanjong Hagu hingga sekarang.
            <br /><br />
            Tanjong Hagu adalah gampong yang terletak di pemukiman Madan dan salah satu dari 40 Gampong yang ada di Kecamatan Samudera, Kabupaten Aceh Utara dengan jarak 5,8 Km ke pusat ibukota kecamatan. 
            Luas wilayah Tanjong Hagu ± 77 Ha, yang terbagi kedalam 3 dusun, yaitu Dusun Blang, Dusun Teungoh, dan Dusun Tanjong. 
            Adapun keseharian mata pencaharian penduduk adalah di bidang pertanian dan perkebunan.
          </p>
        </div>
      </div>
    </section>
  );
}
