import Image from "next/image";

export default function Sejarah() {
  console.log("Rendering Sejarah Component");
  return (
    <section id="sejarah" className="py-20 bg-gray-100">
      {" "}
      {/* Tambahkan bg-gray-100 di sini */}
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 pr-8 text-black">
          <h2 className="text-3xl font-bold mb-4 ">Sejarah Gampong</h2>
          <p>
            {" "}
            Nama Tanjong Hagu berawal dari pedalaman dan pohon, rumah penduduk
            kala itu banyak di Tanjong, bukan di pinggiran jalan Madan. Di
            daerah Tanjong pada saat itu banyak ditumbuhi pepohonan besar nan
            lebat, nama pohon tersebut adalah Hagu oleh karena itu masyarakat
            yang kala itu mendiami daerah tersebut menyatukan dua kata, yakni
            Tanjong dan Hagu, sehingga daerah tersebut dikenal sebagai Gampong
            Tanjong Hagu hingga sekarang. Tanjong Hagu adalah gampong yang
            terletak di pemukiman Madan dan salah satu dari 40 Gampong yang ada
            di Kecamatan Samudera Kabupaten Aceh Utara dengan jarak 5,8 Km ke
            pusat ibukota kecamatan. Luas wilayah Tanjong Hagu ± 77 Ha, yang
            terbagi kedalam 3 dusun, yaitu dusun blang, dusun teungoh, dusun
            tanjong. Adapun keseharian mata pencaharian penduduk adalah dibidang
            pertanian dan perkebunan.
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
