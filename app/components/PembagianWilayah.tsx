import Image from "next/image"

export default function PembagianWilayah() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Pembagian Wilayah Dusun</h2>
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Pembagian Wilayah Dusun Gampong Tanjong Hagu"
          width={800}
          height={400}
          className="mx-auto rounded-lg"
        />
      </div>
    </section>
  )
}

