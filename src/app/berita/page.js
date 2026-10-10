import Image from "next/image";
import Link from "next/link";
import berita from "../../data/berita";

function SidebarKiri() {
  return (
    <aside className="space-y-5">
      <div className="border border-gray-200 bg-white p-6">
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
            image: "/images/face.png",
            url: "https://www.facebook.com/",
          },
          {
            name: "Instagram",
            image: "/images/igg.png",
            url: "https://www.instagram.com/",
          },
          {
            name: "YouTube",
            image: "/images/yttt.png",
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
              <Image
                src={social.image}
                alt=""
                fill
                sizes="16px"
                className="object-contain"
              />
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
            htmlFor="search-news"
            className="mb-2 block text-xs text-gray-500"
          >
            Search
          </label>
          <div className="flex gap-2">
            <input
              id="search-news"
              name="s"
              type="search"
              className="min-w-0 flex-1 border border-gray-200 px-2 py-2 text-sm outline-none focus:border-blue-700"
            />
            <button
              type="submit"
              className="bg-[#303840] px-4 py-2 text-sm text-white hover:bg-[#199ed2]"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="border border-gray-200 bg-white p-4">
        <h2 className="border-b border-gray-200 pb-3 text-lg font-normal text-gray-900">
          Recent Posts
        </h2>

        <ul className="mt-4 space-y-3">
          {berita.slice(0, 5).map((post) => (
            <li key={post.slug} className="flex items-start gap-2">
              <span className="text-gray-700">›</span>
              <Link
                href={`/berita/${post.slug}`}
                className="text-xs leading-5 text-[#172957] hover:text-orange-600"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default function BeritaPage() {
  return (
    <div className="min-h-screen bg-[#f4f9fb]">
      {/* BREADCRUMB */}
      <div className="bg-[#293f80]">
        <div className="mx-auto max-w-[1120px] px-5 py-3">
          <nav className="flex gap-2 text-xs text-blue-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>›</span>
            <span>Berita Terbaru</span>
          </nav>
        </div>
      </div>

      {/* KONTEN BERITA */}
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-6 px-5 py-6 lg:grid-cols-[193px_minmax(0,1fr)_193px]">
        <SidebarKiri />

        <main className="min-w-0 space-y-3">
          <h1 className="border border-gray-200 bg-white px-5 py-1 text-xl font-normal text-gray-900 sm:text-2xl">
            Category: BERITA TERBARU
          </h1>

          {berita.map((item) => (
            <article
              key={item.slug}
              className="border border-gray-200 bg-white p-4 sm:p-5"
            >
              <Link href={`/berita/${item.slug}`} className="block">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 410px"
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="mt-3 flex items-start gap-3">
                <div className="shrink-0 text-center">
                  <div className="bg-[#293f80] px-3 py-1 text-xs text-white">
                    {item.month}
                  </div>
                  <div className="bg-[#199ed2] px-3 py-1 text-2xl font-bold text-white">
                    {item.date}
                  </div>
                </div>

                <h2 className="text-lg font-normal leading-6 text-[#172957] sm:text-xl">
                  <Link
                    href={`/berita/${item.slug}`}
                    className="hover:text-orange-600"
                  >
                    {item.title}
                  </Link>
                </h2>
              </div>

              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-gray-500">
                <span>♟ admin</span>
                <span>▱ BERITA TERBARU</span>
              </div>

              <p className="mt-5 text-xs leading-[1.6] text-gray-600">
                {item.excerpt}{" "}
                <Link
                  href={`/berita/${item.slug}`}
                  className="ml-1 whitespace-nowrap text-[#199ed2] hover:text-orange-600"
                >
                  Read more
                </Link>
              </p>
            </article>
          ))}
        </main>

        <SidebarKanan />
      </div>
    </div>
  );
}
