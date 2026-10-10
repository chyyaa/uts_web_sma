import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import berita from "@/data/berita";

function SidebarKiri() {
  return (
    <aside className="space-y-5">
      <div className="border border-gray-200 bg-white p-5">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[150px]">
          <Image
            src="/images/pmb.png"
            alt="Poster PMB SMA Al Islam 1 Surakarta"
            fill
            sizes="150px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="space-y-4 border border-gray-200 bg-white p-5 text-sm">
        {[
          {
            name: "Facebook",
            image: "/images/fbb.png",
            url: "https://www.facebook.com/",
          },
          {
            name: "Instagram",
            image: "/images/ig.png",
            url: "https://www.instagram.com/",
          },
          {
            name: "YouTube",
            image: "/images/yt.png",
            url: "https://www.youtube.com/",
          },
        ].map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-orange-600 hover:text-blue-800"
          >
            <span className="relative h-4 w-4 shrink-0">
              <Image src={social.image} alt="" fill sizes="16px" />
            </span>
            {social.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}

function SidebarKanan() {
  return (
    <aside className="space-y-5">
      <div className="border border-gray-200 bg-white p-4">
        <form action="/berita" method="GET">
          <label
            htmlFor="search-detail"
            className="mb-2 block text-xs text-gray-500"
          >
            Search
          </label>
          <div className="flex gap-2">
            <input
              id="search-detail"
              type="search"
              name="s"
              className="min-w-0 flex-1 border border-gray-200 px-2 py-2 text-sm outline-none focus:border-blue-700"
            />
            <button className="bg-[#303840] px-3 py-2 text-sm text-white">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="border border-gray-200 bg-white p-4">
        <h2 className="border-b border-gray-200 pb-3 text-lg">Recent Posts</h2>
        <ul className="mt-4 space-y-3">
          {berita.map((item) => (
            <li key={item.slug} className="flex items-start gap-2">
              <span>›</span>
              <Link
                href={`/berita/${item.slug}`}
                className="ml-1 whitespace-nowrap text-[#199ed2] hover:text-orange-600"
              >
                Read more
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default async function DetailBeritaPage({ params }) {
  const { slug } = await params;
  const item = berita.find((post) => post.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f4f9fb]">
      {/* BREADCRUMB */}
      <div className="bg-[#293f80]">
        <div className="mx-auto max-w-[1120px] px-5 py-3">
          <nav className="flex flex-wrap gap-2 text-xs text-blue-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>›</span>
            <Link href="/berita" className="hover:text-white">
              Berita Terbaru
            </Link>
            <span>›</span>
            <span className="text-white">{item.title}</span>
          </nav>
        </div>
      </div>

      {/* KONTEN */}
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-6 px-5 py-6 lg:grid-cols-[193px_minmax(0,1fr)_193px]">
        <SidebarKiri />

        <main className="min-w-0 border border-gray-200 bg-white p-4 sm:p-6">
          <h1 className="text-2xl font-normal leading-tight text-[#172957] sm:text-3xl">
            {item.title}
          </h1>

          <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
            <span>♟ admin</span>
            <span>▱ BERITA TERBARU</span>
            <span>
              {item.date} {item.month} {item.year}
            </span>
          </div>

          <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 410px"
              className="object-cover"
            />
          </div>

          <div className="mt-5 space-y-4 text-sm leading-7 text-gray-700">
            {item.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-4">
            <Link
              href="/berita"
              className="text-sm text-[#199ed2] hover:text-orange-600"
            >
              ← Kembali ke Berita Terbaru
            </Link>
          </div>
        </main>

        <SidebarKanan />
      </div>
    </div>
  );
}
