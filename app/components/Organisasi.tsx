import Image from "next/image"

export default function Organisasi() {
  return (
    <section id="organisasi" className="py-20 bg-blue-25">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-black-600">Struktur Organisasi</h2>
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

