import HeroSlider from "../components/HeroSlider";
import BeritaEvent from "../components/BeritaEvent";
import BannerPMB from "../components/BannerPMB";
import ProgramUnggulan from "../components/ProgramUnggulan";
import Ekstrakurikuler from "../components/Ekstrakurikuler";
import IslamiBerprestasi from "../components/IslamiBerprestasi";

const program = [
  {
    nomor: "01",
    judul: "Program Tahfidz",
    deskripsi:
      "Mengembangkan kemampuan menghafal Al-Qur'an dengan baik dan benar sesuai ilmu tajwid.",
  },
  {
    nomor: "02",
    judul: "Kelas Coding",
    deskripsi:
      "Mendorong kemampuan berpikir logis, kreativitas, dan keterampilan teknologi digital.",
  },
  {
    nomor: "03",
    judul: "Ekstrakurikuler",
    deskripsi:
      "Wadah bagi siswa untuk mengembangkan minat, bakat, kepemimpinan, dan kerja sama.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BeritaEvent />
      <BannerPMB />
      <ProgramUnggulan />
      <Ekstrakurikuler />
      <IslamiBerprestasi />
    </>
  );
}
