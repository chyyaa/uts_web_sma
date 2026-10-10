const informasi = [
  {
    ikon: "♟",
    judul: "OSIS",
    deskripsi:
      "Adalah wadah organisasi siswa yang menjadi pelopor kegiatan di sekolah.",
  },
  {
    ikon: "♟",
    judul: "HIPK",
    deskripsi: "Adalah wadah organisasi alumni siswa yang ada di sekolah.",
  },
  {
    ikon: "▤",
    judul: "19 EKSKUL",
    deskripsi:
      "Dari 19 ekstrakurikuler dapat ditempuh sebagai wadah dalam berbagai kegiatan ekstrakurikuler.",
  },
];

export default function Ekstrakurikuler() {
  return (
    <section className="w-full bg-[#198754] pt-2 pb-5 text-white sm:pt-12 sm:pb-15">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-lg font-bold uppercase sm:text-2xl">
            EKSTRAKURIKULER SMA AL ISLAM 1 SURAKARTA
          </h2>
          <p className="mt-1 text-[15px] leading-relaxed text-white/90">
            19 Ekstrakurikuler yang ada di Sekolah siap menjembatani minat dan
            bakat peserta didik untuk menyalurkan bakat sesuai bidangnya.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {informasi.map((item) => (
            <div key={item.judul} className="flex items-start gap-3">
              <span className="text-lg leading-none">{item.ikon}</span>

              <div>
                <h3 className="text-xs font-bold uppercase">{item.judul}</h3>

                <p className="mt-1 text-[10px] leading-relaxed text-white/90">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
