export default function Dusun() {
  // Data dusun dengan informasi yang berbeda
  const dusunList = [
    {
      name: "Dusun Damai",
      description: "Dusun Damai terkenal dengan suasana yang tenang dan lingkungan yang asri. Banyak kegiatan keagamaan dan sosial yang dilakukan di sini.",
    },
    {
      name: "Dusun Sejahtera",
      description: "Dusun Sejahtera adalah pusat perekonomian di Gampong Tanjong Hagu. Terdapat pasar tradisional dan sentra kerajinan tangan.",
    },
    {
      name: "Dusun Makmur",
      description: "Dusun Makmur memiliki lahan pertanian yang subur. Masyarakatnya sebagian besar bekerja sebagai petani dan nelayan.",
    },
    // {
    //   name: "Dusun Bahagia",
    //   description: "Dusun Bahagia dikenal dengan keramahan warganya. Terdapat banyak destinasi wisata alam seperti pantai dan bukit.",
    // },
  ];

  return (
    <section id="dusun" className="bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Pembagian Dusun</h2>
        <div className="flex justify-around flex-wrap gap-6 text-black">
          {dusunList.map((dusun, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-2">{dusun.name}</h3>
              <p className="text-gray-700">{dusun.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}