export default function VisiMisi() {
  console.log("Rendering VisiMisi Component");
    return (
      <section id="visi-misi" className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Visi dan Misi</h2>
          <div className="flex justify-between">
            <div className="w-1/2 pr-4">
              <h3 className="text-2xl font-semibold mb-4 text-center">Visi</h3>
              <p className="text-center">
              Visi jangka menengah Gampong Tanjung Hagu yaitu Terwujudnya Kehidupan Masyarakat Gampong Tanjong Hagu yang Religius, Aman, Sehat, Sejahtera, dan Cerdas.
              </p>
            </div>
            <div className="w-1/2 pl-4">
              <h3 className="text-2xl font-semibold mb-4 text-center">Misi</h3>
              <ul className="list-disc pl-5">
                <p>
                Misi yang akan ditempuh untuk mewujudkan visi Gampong Tanjong Hagu adalah sebagai berikut:
                </p>
                <li>Menyelenggarakan pemerintahan gampong yang efisien, efektif, dan bersih dengan menggutamakan masyarakat.</li>
                <li>Meningkatkan kualitas kehidupan beragama dalam mewujudkan pembangunan normal spiritual melalui bidang agama, adat istiadat, dan budaya.</li>
                <li>Meningkatkan kualitas sumber daya manusia dalam pembangunan gampong yang berkelanjutan.</li>
                <li>Meningkatkan sarana dan prasarana dari segi fisik, ekonomi, pendidikan, kesehatan, sosial dan budaya di gampong.</li>
                <li>Meningkatkan pemberdayaan masyarakat melalui partisipasi aktif dalam kegiatan ekonomi produktif.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  