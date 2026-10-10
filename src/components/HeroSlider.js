import Image from "next/image";

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-green-700">
      {/* Banner utama */}
      <div className="relative min-h-[280px] w-full sm:min-h-[380px] lg:min-h-[440px]">
        {/* Foto banner SMALSA */}
        <Image
          src="/images/banner-smalsa.jpg"
          alt="Banner SMA Al Islam 1 Surakarta"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Informasi di kiri bawah */}
        <div className="absolute bottom-12 left-5 z-10 max-w-xs sm:bottom-16 sm:left-8 sm:max-w-md">
          <div className="inline-block bg-[#159bd0] px-3 py-2 text-xs font-bold text-white">
            SMALSA SELALU DIHATI
          </div>

          <div className="bg-white px-3 py-3 text-xs leading-5 text-gray-600 shadow-md">
            Terwujudnya generasi tauhid yang berakhlak mulia, berwawasan ilmiah,
            terampil dan berprestasi.
          </div>

          <a
            href="/about"
            className="mt-3 inline-block bg-orange-500 px-4 py-2 text-xs font-bold text-white hover:bg-orange-600"
          >
            Read More ›
          </a>
        </div>

        {/* Media sosial di bagian bawah */}
      </div>
    </section>
  );
}
