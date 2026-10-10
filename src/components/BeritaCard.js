import Image from "next/image";
import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/berita/${berita.id}`}>
        <div className="relative h-52 w-full bg-slate-100">
          <Image
            src={berita.gambar}
            alt={berita.judul}
            fill
            className="object-cover transition duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          {berita.tanggal}
        </p>

        <h2 className="mt-3 text-lg font-bold leading-snug text-slate-900">
          {berita.judul}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {berita.ringkasan}
        </p>

        <Link
          href={`/berita/${berita.id}`}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Baca Selengkapnya <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
