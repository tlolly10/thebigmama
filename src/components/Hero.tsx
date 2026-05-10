import wings from "@/assets/wings.jpg";
import { Star, MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[4px] border-ink">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone opacity-[0.08] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          {/* Comic badge */}
          <div className="inline-flex items-center gap-2 comic-border bg-accent px-4 py-1.5 font-heading uppercase tracking-wider text-sm rotate-[-2deg]">
            <Star size={16} className="fill-ink" /> 4.7 Stars · 1,427 Reviews
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] uppercase">
            Burgers <span className="text-primary text-stroke">SO BIG</span>,
            <br /> they need a
            <br />
            <span className="inline-block bg-ink text-cream px-4 py-1 -rotate-1">CAPE.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-xl text-foreground/80">
            Hand-crafted Angus burgers, juicy steaks and crispy wings — served hot in
            Al Warqa since 2018. Comic-book vibes, mama-sized portions, prices that
            won't bite back.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#menu"
              className="comic-border-red bg-primary text-primary-foreground px-6 py-3 font-heading text-lg uppercase tracking-wider transition-transform hover:-translate-y-1 hover:translate-x-[-2px]"
            >
              See the Menu
            </a>
            <a
              href="https://www.talabat.com"
              target="_blank"
              rel="noreferrer"
              className="comic-border bg-cream text-ink px-6 py-3 font-heading text-lg uppercase tracking-wider transition-transform hover:-translate-y-1"
            >
              Order on Talabat
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-sm font-medium">
            <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Open 12pm – 1:30am</div>
            <div className="flex items-center gap-2"><MapPin size={18} className="text-primary" /> Al Warqa 2, Dubai</div>
          </div>
        </div>

        <div className="relative">
          {/* Burst behind */}
          <div className="absolute inset-0 -m-8 burst-bg rounded-full blur-[2px] opacity-90 -z-0" style={{ clipPath: "polygon(50% 0%, 61% 12%, 75% 6%, 80% 22%, 95% 25%, 88% 40%, 100% 50%, 88% 60%, 95% 75%, 80% 78%, 75% 94%, 61% 88%, 50% 100%, 39% 88%, 25% 94%, 20% 78%, 5% 75%, 12% 60%, 0% 50%, 12% 40%, 5% 25%, 20% 22%, 25% 6%, 39% 12%)" }} />

          <div className="relative comic-border-lg overflow-hidden bg-card pop-in">
            <img src={wings} alt="Mama's signature wings & fries" className="w-full h-[420px] md:h-[520px] object-cover" />
          </div>
          <div className="absolute -top-4 -left-4 comic-border bg-accent px-4 py-2 font-display text-2xl rotate-[-8deg] pop-in">
            POW!
          </div>
          <div className="absolute -bottom-5 -right-2 comic-border bg-cream px-4 py-2 font-display text-xl rotate-[6deg] pop-in">
            from <span className="text-primary">AED 1</span>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="bg-ink text-cream py-3 overflow-hidden border-t-[3px] border-ink">
        <div className="marquee flex whitespace-nowrap gap-12 font-display text-2xl tracking-wider">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              <span>★ ANGUS BURGER XXL</span>
              <span className="text-primary">★ JUICY WINGS</span>
              <span>★ FRESH STEAKS</span>
              <span className="text-accent">★ CRAZY FRIES</span>
              <span>★ MAMA-SIZED MILKSHAKES</span>
              <span className="text-primary">★ OPEN TILL 1:30 AM</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
