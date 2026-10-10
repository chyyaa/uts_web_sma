import Image from "next/image";
import Link from "next/link";

const menu = [
  { judul: "PPDB", link: "/pmb" },
  { judul: "AGENDA", link: "/agenda" },
  { judul: "BERITA TERBARU", link: "/berita" },
];

const artikel = [
  {
    judul: "MES Surakarta & ASBISINDO Goes to School",
    deskripsi: "REKAPITULASI REALISASI PENGGUNAAN DANA BOSP TAHAP I TAHUN 2026",
    link: "/berita",
  },
  {
    judul:
      "Falih DiharIlan Alfirdaus Terpilih sebagai Ketua OSIS SMA Al Islam 1 Surakarta 2026/2027",
    deskripsi: "",
    link: "/berita",
  },
];

export default function Footer() {
  return (
    <footer className="w-full text-white">
      {/* BAGIAN UTAMA FOOTER */}
      <div className="bg-[#293f80]">
        <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1.1fr_1.25fr_0.9fr] lg:gap-12 lg:px-16 lg:py-16">
          {/* IDENTITAS SEKOLAH */}
          <div>
            <h2 className="text-lg font-normal">SMA AL ISLAM 1 SURAKARTA</h2>

            <div className="mt-16 max-w-[355px] border-l-[7px] border-cyan-500 bg-orange-600 px-10 py-6">
              <p className="text-base font-bold leading-6">
                "Terwujudnya generasi tauhid yang berakhlak mulia, berwawasan
                ilmiah, terampil dan berprestasi."
              </p>
            </div>

            <form action="/" method="GET" className="mt-16 max-w-[355px]">
              <label htmlFor="footer-search" className="mb-2 block text-sm">
                Search
              </label>

              <div className="flex gap-4">
                <input
                  id="footer-search"
                  name="s"
                  type="search"
                  className="h-16 min-w-0 flex-1 bg-white px-3 text-gray-800 outline-none"
                />

                <button
                  type="submit"
                  className="bg-[#303b4d] px-7 text-base hover:bg-gray-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* MENU SINGKAT */}
          <div>
            <h3 className="text-2xl font-normal uppercase">MENU SINGKAT</h3>

            <ul className="mt-7 space-y-3">
              {menu.map((item) => (
                <li key={item.judul}>
                  <Link
                    href={item.link}
                    className="text-base transition hover:text-amber-300"
                  >
                    › &nbsp; {item.judul}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ARTIKEL TERBARU */}
          <div>
            <h3 className="text-2xl font-normal uppercase">ARTIKEL TERBARU</h3>

            <div className="mt-7 space-y-5">
              {artikel.map((item) => (
                <article key={item.judul}>
                  <Link
                    href={item.link}
                    className="text-lg leading-7 transition hover:text-amber-300 sm:text-xl"
                  >
                    {item.judul}
                  </Link>

                  {item.deskripsi && (
                    <p className="mt-4 text-lg leading-7">{item.deskripsi}</p>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* LOGO DAN VIDEO */}
          <div className="flex flex-col items-start gap-12">
            <div className="relative h-24 w-full max-w-[235px]">
              <Image
                src="/images/log.png"
                alt="Logo SMA Al Islam 1 Surakarta"
                fill
                sizes="235px"
                className="object-contain object-left"
              />
            </div>

            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Kunjungi video sekolah"
              className="relative block aspect-video w-full max-w-[235px] overflow-hidden bg-black"
            >
              <Image
                src="/images/vi.png"
                alt="Video SMA Al Islam 1 Surakarta"
                fill
                sizes="235px"
                className="object-cover"
              />

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-xl bg-red-600 px-6 py-3 text-2xl text-white">
                  ▶
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#071750] px-5 py-5 text-center text-base">
        <p>Copyright © All rights reserved.</p>
        <p className="mt-3">IT SUPPORT 2026</p>
      </div>
    </footer>
  );
}
