export default function PembagianWilayah() {
  console.log("Rendering Pembagian Component");
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Pembagian Wilayah Dusun
        </h2>

        {/* Wrapper untuk memusatkan peta */}
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7720.478651423773!2d97.22503964068873!3d5.090739379544628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30478664e02d7a39%3A0x3e32c6424c5513b2!2sTanjong%20Hagu%2C%20Samudera%2C%20North%20Aceh%20Regency%2C%20Aceh!5e1!3m2!1sen!2sid!4v1738411705489!5m2!1sen!2sid"
            width="800"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-gray-900">
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <h3 className="text-xl font-semibold">Sebelah Utara</h3>
            <p>Berbatasan dengan Gampong Madan</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <h3 className="text-xl font-semibold">Sebelah Selatan</h3>
            <p>Berbatasan dengan Gampong Tanjong Reungkam</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <h3 className="text-xl font-semibold">Sebelah Timur</h3>
            <p>Berbatasan dengan Krueng Pasee</p>
          </div>
          <div className="p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
            <h3 className="text-xl font-semibold">Sebelah Barat</h3>
            <p>Berbatasan dengan Gampong Ulee Meuria Kecamatan Meurah Mulia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
