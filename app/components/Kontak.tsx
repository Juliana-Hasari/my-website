export default function Kontak() {
  console.log("Rendering Kontak Component");
  return (
    <section id="kontak" className="bg-green-500 text-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Hubungi Kami</h2>
        <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-justify">
            <h3 className="text-xl font-semibold mb-4">Alamat</h3>
            <p>Gampong Tanjong Hagu</p>
            <p>Kecamatan Samudera, Kab.Aceh Utara</p>
            <p>Provinsi Aceh, Indonesia</p>
            <p>Kode Pos: 24374</p>
          </div>
          <div className="text-justify">
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

