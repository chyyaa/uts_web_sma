import Image from "next/image";
import Link from "next/link";

const berita = [
  {
    gambar: "/images/berita 1.jpg",
    tanggal: "26 September 2026",
    judul: "MES Surakarta & ASBISINDO Goes to School",
    deskripsi:
      "Masyarakat Ekonomi Syariah (MES) Surakarta bekerja sama dengan ASBISINDO DPW Solo Raya menggelar kegiatan bertajuk “MES Surakarta & ASBISINDO Goes…",
  },
  {
    gambar: "/images/berita 2.jpg",
    tanggal: "8 September 2026",
    judul: "REKAPITULASI REALISASI PENGGUNAAN DANA BOSP TAHAP I TAHUN 2026",
    deskripsi:
      "Bantuan Operasional Sekolah atau BOS adalah bantuan pendidikan berbentuk dana yang diberikan kepada sekolah dan madrasah untuk kepentingan nonpersonalia. Dana…",
  },
  {
    gambar: "/images/berita 3.png",
    tanggal: "8 September 2026",
    judul:
      "Falih Diharlan Alfirdaus Terpilih sebagai Ketua OSIS SMA Al Islam 1 Surakarta 2026/2027",
    deskripsi:
      "SMA Al Islam 1 Surakarta baru saja merampungkan agenda besar tahunan yakni pesta demokrasi pelajar melalui Pemilihan Ketua OSIS (Pemilos)…",
  },
];

const events = [
  {
    tanggal: "22–24 AGUSTUS 2026",
    judul: "KIB 48_X",
    deskripsi: "Watu Gambir, Karangpandan, Karanganyar",
  },
  {
    tanggal: "31 AGUSTUS 2026",
    judul: "ASB X & XI",
    deskripsi: "Pelaksanaan CBT Online",
  },
  {
    tanggal: "05 SEPTEMBER 2026",
    judul: "PEMILIHAN OSIS",
    deskripsi: "Pemilihan secara online",
  },
  {
    tanggal: "28 MARET 2026",
    judul: "HALAL BIHALAL YAYASAN",
    deskripsi: "Pelaksanaan kegiatan yayasan",
  },
];

export default function BeritaEvent() {
  return (
    <section className="bg-white py-7">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-4">
          {/* BERITA TERBARU */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xs text-[#293f80]">▦</span>
              <h2 className="text-xs font-medium text-[#293f80]">
                BERITA TERBARU
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {berita.map((item) => (
                <article
                  key={item.judul}
                  className="min-w-0 overflow-hidden border border-gray-100 bg-white"
                >
                  <div className="relative aspect-video w-full bg-gray-100">
                    <Image
                      src={item.gambar}
                      alt={item.judul}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-2">
                    <p className="text-[9px] text-gray-500">{item.tanggal}</p>

                    <h3 className="mt-1 text-[10px] font-bold leading-snug text-[#293f80]">
                      {item.judul}
                    </h3>

                    <p className="mt-2 text-[9px] leading-relaxed text-gray-600">
                      {item.deskripsi}
                    </p>

                    <Link
                      href="/berita"
                      className="mt-2 inline-block text-[9px] text-[#199ed2] hover:underline"
                    >
                      Selengkapnya →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* EVENT SMALSA */}
          <aside>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xs text-[#293f80]">▦</span>
              <h2 className="text-xs font-medium text-[#293f80]">
                EVENT SMALSA
              </h2>
            </div>

            <div className="space-y-3">
              {events.map((event) => (
                <article
                  key={event.judul}
                  className="border-b border-gray-100 pb-2"
                >
                  <h3 className="text-[10px] font-bold text-[#293f80]">
                    {event.judul}
                  </h3>

                  <p className="mt-1 text-[9px] leading-relaxed text-gray-500">
                    {event.tanggal} · {event.deskripsi}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
