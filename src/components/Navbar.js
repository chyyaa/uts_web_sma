"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const menu = [
  { label: "HOME", href: "/" },
  { label: "PROFIL", href: "/about" },
  { label: "BERITA TERBARU", href: "/berita" },
  { label: "EKSTRAKURIKULER", href: "/about#ekstrakurikuler" },
  { label: "DOWNLOAD", href: "/about" },
  { label: "ARTIKEL", href: "/berita" },
  { label: "ALUMNI", href: "/about" },
  { label: "PMB 2027/2028", href: "/pmb" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full font-sans">
      {/* BAR BERITA DAN MEDIA SOSIAL */}
      <div className="flex h-9 w-full overflow-hidden bg-[#199ed2] text-white">
        <div
          className="flex shrink-0 items-center bg-[#ff6500] px-4 font-bold sm:px-8"
          style={{
            clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)",
          }}
        >
          <span className="pr-3 text-sm sm:text-xl">NEWS :</span>
        </div>

        <Link
          href="/berita"
          className="flex min-w-0 flex-1 items-center truncate px-2 text-xs font-bold sm:px-5 sm:text-base"
        >
          SMA AL - ISLAM 1 SURAKARTA
        </Link>

        <div className="flex shrink-0 items-center">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-8 items-center justify-center border-l border-white/10 sm:w-12"
          >
            <div className="relative h-4 w-4 sm:h-5 sm:w-5">
              <Image
                src="/images/fb.png"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
          </a>

          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-8 items-center justify-center border-l border-white/10 sm:w-12"
          >
            <div className="relative h-4 w-4 sm:h-5 sm:w-5">
              <Image
                src="/images/ig.png"
                alt="Instagram"
                fill
                className="object-contain"
              />
            </div>
          </a>

          <a
            href="https://youtube.com"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-8 items-center justify-center border-x border-white/10 sm:w-12"
          >
            <div className="relative h-4 w-5 sm:h-5 sm:w-6">
              <Image
                src="/images/yt.png"
                alt="YouTube"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </div>

      {/* IDENTITAS SEKOLAH */}
      <div className="w-full bg-[#293f80] text-white">
        <div className="mx-auto w-full max-w-[1700px] px-4 py-8 sm:px-8 lg:px-12">
          {/* LOGO DAN NAMA SEKOLAH */}
          <Link href="/" className="flex w-fit items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white sm:h-20 sm:w-20">
              <Image
                src="/images/logo-smalsa.jpg"
                alt="Logo SMA Al Islam 1 Surakarta"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>

            <div>
              <h1 className="text-xl font-normal leading-tight sm:text-3xl lg:text-[34px]">
                SMA AL ISLAM 1 SURAKARTA
              </h1>

              <p className="mt-2 text-xs tracking-[0.2em] text-blue-200 sm:text-lg">
                PORTAL RESMI
              </p>
            </div>
          </Link>

          {/* TELEPON DAN ALAMAT */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:ml-auto lg:w-fit lg:translate-x-0 lg:grid-cols-[220px_500px] lg:gap-10">
            {/* TELEPON DAN EMAIL */}
            <div className="flex min-w-0 items-start gap-3 sm:ml-4">
              <div className="relative h-12 w-8 shrink-0">
                <Image
                  src="/images/tlp.png"
                  alt="Telepon"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm sm:text-xl">08570 10000 94</p>

                <p className="break-all text-xs text-blue-200 sm:text-sm">
                  admin@smalsa.sch.id
                </p>
              </div>
            </div>

            {/* ALAMAT SEKOLAH */}
            <div className="flex min-w-0 items-start gap-3">
              <div className="relative h-8 w-8 shrink-0">
                <Image
                  src="/images/rumah.png"
                  alt="Alamat"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="break-words text-sm leading-6 sm:text-lg">
                  Jl. Honggowongso No. 94 Surakarta
                </p>

                <p className="break-words text-xs leading-5 text-blue-200 sm:text-sm">
                  Panularan, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57149
                </p>
              </div>
            </div>
          </div>

          {/* MENU NAVIGASI */}
          <nav className="mt-8 flex w-full flex-wrap items-center bg-white text-black">
            {menu.map((item) => {
              const isHome = item.href === "/";
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex min-h-[46px] items-center justify-center gap-2 px-3 py-3 text-xs transition sm:px-4 sm:text-sm ${
                    isHome && pathname === "/"
                      ? "bg-[#199ed2] text-white"
                      : "text-black hover:bg-[#199ed2] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* KOLOM PENCARIAN */}
            <div className="hidden px-3 py-2 xl:ml-auto xl:block">
              <input
                type="search"
                placeholder="Search ..."
                aria-label="Cari"
                className="w-40 border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#199ed2]"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
