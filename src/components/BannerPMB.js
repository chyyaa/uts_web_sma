import Link from "next/link";

export default function BannerPMB() {
  return (
    <section className="w-full bg-[#199ed2] text-white">
      <div className="mx-auto flex min-h-[200px] max-w-7xl flex-col items-start justify-between gap-5 px-5 py-4 sm:flex-row sm:items-center sm:px-8 sm:py-4">
        {/* INFORMASI PMB */}
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-semibold uppercase sm:text-lg">
            PMB TA. 2027/2028 | GEL. INDEN (19 AGUSTUS 2026)
          </h2>

          <p className="mt-3 text-[10px] leading-5 text-white/90 sm:text-xs">
            SMA AL ISLAM 1 MEMBUKA PENDAFTARAN PENERIMAAM MURID BARU TAHUN
            AJARAN 2027/2028. KLIK TOMBOL DAFTAR !
          </p>
        </div>

        {/* TOMBOL PENDAFTARAN */}
        <div className="flex shrink-0 flex-col gap-2">
          <Link
            href="/about"
            className="border border-white px-5 py-2 text-center text-xs font-semibold transition hover:bg-white hover:text-[#199ed2]"
          >
            DAFTAR PMB »
          </Link>

          <Link
            href="/about"
            className="border border-white/70 px-5 py-2 text-center text-xs transition hover:bg-white hover:text-[#199ed2]"
          >
            →
          </Link>
        </div>
      </div>
    </section>
  );
}
