export default function Kontak() {
  console.log("Rendering Kontak Component");
  return (
    <section id="kontak" className="bg-green-500 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Hubungi Kami</h2>
        <div className="flex justify-around">
          <div>
            <h3 className="text-xl font-semibold mb-4">Alamat</h3>
            <p>Gampong Tanjong Hagu</p>
            <p>Kecamatan Peukan Baro, Kabupaten Pidie</p>
            <p>Provinsi Aceh, Indonesia</p>
            <p>Kode Pos: 24172</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <p>Telepon: (0821)4502-5877</p>
            <p>Geucik: Maizar</p>
            <p>Email: info@gampongtanjonghagu.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
