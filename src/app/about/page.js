import Image from "next/image";
import Link from "next/link";

const recentPosts = [
  "MES Surakarta & ASBISINDO Goes to School",
  "REKAPITULASI REALISASI PENGGUNAAN DANA BOSP TAHAP I TAHUN 2026",
  "Falih Diharlan Alfirdaus Terpilih sebagai Ketua OSIS SMA Al Islam 1 Surakarta 2026/2027",
  "MPLS RAMAH 2026",
  "REUNI PERAK : SMALSA 2001",
];

export default function ProfilSekolah() {
  return (
    <main className="min-h-screen bg-[#f4f9fb]">
      {/* BREADCRUMB */}
      <div className="bg-[#293f80]">
        <div className="mx-auto max-w-[1400px] px-5 py-4 sm:px-8">
          <nav className="flex gap-2 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>›</span>
            <span>Tentang Kami</span>
          </nav>
        </div>
      </div>

      {/* KONTEN UTAMA */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-6 px-5 py-8 sm:px-8 lg:grid-cols-[0.75fr_1.5fr_0.75fr] lg:gap-8 lg:py-10">
        {/* KOLOM KIRI */}
        <aside className="space-y-6">
          {/* POSTER PMB */}
          <div className="border border-gray-200 bg-white p-6">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px]">
              <Image
                src="/images/pmb.png"
                alt="Poster Penerimaan Murid Baru SMA Al Islam 1 Surakarta"
                fill
                sizes="220px"
                className="object-contain"
              />
            </div>
          </div>

          {/* MEDIA SOSIAL */}
          <div className="border border-gray-200 bg-white p-5">
            <div className="flex flex-col gap-4 text-sm">
              {/* FACEBOOK */}
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-orange-600 hover:text-blue-800"
              >
                <div className="relative h-5 w-5 shrink-0">
                  <Image
                    src="/images/face.png"
                    alt="Facebook"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Facebook</span>
              </Link>

              {/* INSTAGRAM */}
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-orange-600 hover:text-blue-800"
              >
                <div className="relative h-5 w-5 shrink-0">
                  <Image
                    src="/images/igg.png"
                    alt="Instagram"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Instagram</span>
              </Link>

              {/* YOUTUBE */}
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-orange-600 hover:text-blue-800"
              >
                <div className="relative h-5 w-5 shrink-0">
                  <Image
                    src="/images/yttt.png"
                    alt="YouTube"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>YouTube</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* KOLOM TENGAH */}
        <article className="border border-gray-200 bg-white p-6 sm:p-8">
          <h1 className="mb-5 text-2xl font-normal text-gray-900 sm:text-3xl">
            Tentang Kami
          </h1>

          <div className="space-y-4 text-sm leading-6 text-gray-600">
            <p>
              SMA Al Islam 1 Surakarta hadir sebagai lembaga pendidikan yang
              berkomitmen melahirkan generasi unggul yang berlandaskan nilai
              tauhid, berakhlak mulia, serta memiliki wawasan ilmiah yang luas
              dan keterampilan yang relevan dengan tuntutan zaman. Kami meyakini
              bahwa pendidikan bukan sekadar proses transfer ilmu, melainkan
              perjalanan pembentukan karakter dan peradaban.
            </p>

            <p>
              Dengan memadukan pendidikan akademik yang berkualitas dan
              pembinaan keislaman yang mendalam, SMA Al Islam 1 Surakarta
              menanamkan nilai kejujuran, ramah, tanggung jawab, dan
              kedisiplinan dalam setiap aspek pembelajaran. Lingkungan sekolah
              kami dirancang sebagai ruang yang kondusif untuk tumbuhnya potensi
              intelektual, spiritual, dan emosional murid secara seimbang. Kami
              mendorong setiap murid untuk menjadi pembelajar sepanjang hayat
              yang kritis, kreatif, dan inovatif, serta mampu berkontribusi
              positif bagi masyarakat, bangsa, dan umat. Melalui berbagai
              program unggulan, kegiatan ekstrakurikuler, dan pembinaan
              prestasi, kami berupaya mengantarkan murid meraih prestasi
              akademik dan nonakademik dengan tetap menjunjung tinggi
              nilai-nilai Islam.
            </p>

            <p>
              SMA Al Islam 1 Surakarta adalah tempat bertumbuhnya generasi masa
              depan yang tidak hanya cerdas dalam berpikir, tetapi juga luhur
              dalam bersikap dan tangguh dalam menghadapi tantangan global, demi
              terwujudnya peradaban yang berkemajuan dan berlandaskan iman.
            </p>
          </div>
        </article>

        {/* KOLOM KANAN */}
        <aside className="space-y-6">
          {/* SEARCH */}
          <div className="border border-gray-200 bg-white p-5">
            <form action="/" method="GET">
              <label
                htmlFor="about-search"
                className="mb-2 block text-sm text-gray-600"
              >
                Search
              </label>

              <div className="flex gap-2">
                <input
                  id="about-search"
                  name="s"
                  type="search"
                  className="min-w-0 flex-1 border border-gray-300 px-2 py-2 text-sm text-gray-800 outline-none focus:border-[#293f80]"
                />

                <button
                  type="submit"
                  className="bg-[#303840] px-4 py-2 text-sm text-white hover:bg-[#293f80]"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* RECENT POSTS */}
          <div className="border border-gray-200 bg-white p-5">
            <h2 className="border-b border-gray-200 pb-3 text-xl font-normal text-gray-900">
              Recent Posts
            </h2>

            <ul className="mt-4 space-y-3">
              {recentPosts.map((post) => (
                <li key={post} className="flex items-start gap-2">
                  <span className="text-gray-700">›</span>

                  <Link
                    href="/berita"
                    className="text-sm leading-5 text-[#172957] hover:text-orange-600"
                  >
                    {post}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
