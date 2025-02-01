import Image from "next/image"

export default function Organisasi() {
  console.log("Rendering Organisasi Component");
  return (
    <section id="organisasi" className="bg-gray-100 py-20 ">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Struktur Organisasi</h2>
        <Image
          src="/Struktur organisasi.jpg?height=400&width=800"
          alt="Struktur Organisasi Gampong Tanjong Hagu"
          width={800}
          height={400}
          className="mx-auto rounded-lg"
        />
      </div>
    </section>
  )
}

