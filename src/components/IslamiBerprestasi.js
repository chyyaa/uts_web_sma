import Image from "next/image";
import Link from "next/link";

export default function IslamiBerprestasi() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[650px] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-16 sm:grid-cols-2 sm:gap-10 sm:px-8 sm:py-20 lg:min-h-[600px] lg:py-24">
        {/* BAGIAN TEKS */}
        <div className="order-2 sm:order-1">
          <h2 className="text-4xl font-extrabold uppercase leading-tight text-[#292929] sm:text-5xl lg:text-5xl">
            "ISLAMI
            <br />
            BERPRESTASI"
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray 600 sm:text-lg lg:text-1xl">
            Terwujudnya generasi tauhid yang berakhlak mulia, berwawasan ilmiah,
            terampil dan berprestasi.
          </p>
          <p className="mt-5 text-base font-medium text-gray-600 sm:text-lg">
            Mari Bergabung Bersama Kami
          </p>

          <Link
            href="/pmb"
            className="mt-5 inline-block rounded-md bg-[#198754] px-8 py-4 text-base font-bold text-white shadow-md transition duration-300 hover:bg-[#146c43] hover:shadow-lg sm:px-10 sm:py-5 sm:text-lg"
          >
            DAFTAR PMB
          </Link>
        </div>

        {/* BAGIAN GAMBAR */}
        <div className="relative order-1 mx-auto h-72 w-full max-w-xl sm:order-2 sm:h-96 lg:h-[400px] lg:max-w-2xl">
          <Image
            src="/images/putra.png"
            alt="Siswa SMA Al Islam 1 Surakarta"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
