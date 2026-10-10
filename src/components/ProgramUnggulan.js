import Image from "next/image";
import Link from "next/link";

const program = [
  {
    gambar: "/images/tf.png",
    judul: "PROGRAM TAHFIDH",
    deskripsi:
      "Program unggulan kegiatan akademis yang lebih memfokuskan pada bidang menghafal Al-Qur'an. Program Tahfidz lebih menekankan pada pemahaman dan penguasaan menyeluruh terhadap cara menghafal Al-Qur'an dengan baik dan benar sesuai dengan Ilmu Tajwid.",
  },
  {
    gambar: "/images/kel.png",
    judul: "PROGRAM KELAS CODING",
    deskripsi:
      "Merupakan Program Baru yang berfokus pada pengembangan hasil belajar siswa secara holistik dengan mewujudkan Profil Pelajar Pancasila yang mencakup kompetensi dan karakter yang diawali dengan SDM yang unggul (kepala sekolah dan Guru).",
  },
];

export default function ProgramUnggulan() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* JUDUL DAN PENGANTAR PROGRAM UNGGULAN */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold uppercase text-[#293f80] sm:text-2xl">
            PROGRAM UNGGULAN SMA AL ISLAM 1 SURAKARTA
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Sesuai Visi Sekolah yakni Terwujudnya generasi tauhid yang berakhlak
            mulia, berwawasan ilmiah, terampil dan berprestasi. Berikut adalah
            beberapa program-program unggulan di SMA AL ISLAM 1 Surakarta.
          </p>
        </div>

        {/* KARTU PROGRAM */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {program.map((item) => (
            <article
              key={item.judul}
              className="group overflow-hidden border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={item.gambar}
                  alt={item.judul}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-sm font-bold text-[#293f80]">
                  {item.judul}
                </h3>

                <p className="mt-3 text-xs leading-6 text-gray-600">
                  {item.deskripsi}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
