export default function Dusun() {
  console.log("Rendering Dusun Component");
  // Data dusun dengan informasi yang berbeda
  const dusunList = [
    {
      name: "Dusun Blang",
      description: "Berdasarkan pemutakhiran data terbaru akhir 2017, jumlah penduduk dusun blang berjumlah 139 jiwa, diantaranya 68 orang laki-laki dan 71 orang perempuan.",
    },
    {
      name: "Dusun Teungoh",
      description: "Jumlah penduduk dusun teungoh ini berjumlah 134 jiwa, diantaranya 62 orang laki-laki dan 72 orang perempuan",
    },
    {
      name: "Dusun Tanjong",
      description: "Jumlah penduduk dusun tanjong berjumlah 141 jiwa, diantaranya 65 orang laki-laki dan 76 orang perempuan.",
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