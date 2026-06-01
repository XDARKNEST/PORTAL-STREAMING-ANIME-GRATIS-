import LogoHero from "@/components/LogoHero";
import PortalCard from "@/components/PortalCard";
import { LINKS } from "@/config/links";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-brand-red/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-red/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-md px-5 pb-10">
        <LogoHero />

        <section className="mt-4 space-y-4">
          <PortalCard
            indicator="green"
            title="Server Utama"
            description="pilih server alternatif di bawah ini jika domain utama mati RESO 360P ONLY • TANPA LOGIN"
            buttonLabel="Buka Server Utama"
            href={LINKS.MAIN_SERVER}
            delay={0.1}
          />
          <PortalCard
            indicator="blue"
            title="Server Cadangan"
            description="STREAMING ANIME GRATIS RESO 360/480/720/1080p (IKLAN) • TANPA LOGIN"
            buttonLabel="Buka Server Cadangan"
            href={LINKS.BACKUP_SERVER}
            delay={0.2}
          />
          <PortalCard
            indicator="whatsapp"
            title="GABUNG GRUP WHATSAPP STREAMING ANIME GRATIS"
            description="Dapat info domain baru dan update anime • TANPA LOGIN"
            buttonLabel="Gabung WhatsApp"
            href={LINKS.WHATSAPP_GROUP}
            delay={0.3}
          />
        </section>

        <footer className="mt-10 text-center text-xs text-white/40 leading-relaxed">
          Dikelola secara resmi oleh Streaming Anime Gratis © 2026
        </footer>
      </div>
    </main>
  );
}
