import Header from "./components/Header";
import Hero from "./components/Hero";
import Sejarah from "./components/Sejarah";
import Dusun from "./components/Dusun";
import Organisasi from "./components/Organisasi";
import VisiMisi from "./components/VisiMisi";
import Kegiatan from "./components/Kegiatan";
import Peta from "./components/Peta";
import PembagianWilayah from "./components/PembagianWilayah";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";
import NotFound from "./not-found"; // Import komponen NotFound

export default function Home() {
  console.log("Rendering Home Page"); // Tambahkan log di sini

  // Contoh kondisi untuk menampilkan halaman NotFound
  const isNotFound = false; // Ganti dengan logika sesuai kebutuhan

  if (isNotFound) {
    return <NotFound />; // Tampilkan halaman NotFound jika kondisi terpenuhi
  }

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Sejarah />
        <Dusun />
        <Organisasi />
        <VisiMisi />
        <Kegiatan />
        <Peta />
        <PembagianWilayah />
        <Kontak />
      </main>
      <Footer />
    </div>
  );
}