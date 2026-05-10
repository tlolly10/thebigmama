import { MapPin, Clock, Phone, Car } from "lucide-react";

export function Visit() {
  return (
    <section id="visit" className="py-20 md:py-28 bg-primary text-primary-foreground border-t-[4px] border-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(var(--color-cream) 1.5px, transparent 2px)", backgroundSize: "14px 14px" }} />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="space-y-6">
          <div className="inline-block comic-border bg-accent text-ink px-4 py-1 font-heading uppercase rotate-[-2deg]">
            Find Us
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight">
            Come hungry.
            <br /> Leave <span className="text-stroke">happy.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <InfoCard icon={<MapPin />} title="Address">
              Tripoli St, Wadi Alamardi,<br />Al Warqa 2, Dubai, UAE
            </InfoCard>
            <InfoCard icon={<Clock />} title="Open Daily">
              12:00 PM – 1:30 AM<br />Every day of the week
            </InfoCard>
            <InfoCard icon={<Phone />} title="Order & Reserve">
              Talabat · Zomato<br />Walk-ins welcome
            </InfoCard>
            <InfoCard icon={<Car />} title="Parking">
              Free parking lot<br />Plenty of space
            </InfoCard>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Big+Mama+Al+Warqa+Dubai"
              target="_blank"
              rel="noreferrer"
              className="comic-border bg-ink text-cream px-6 py-3 font-heading uppercase tracking-wider hover:-translate-y-1 transition-transform"
            >
              Get Directions
            </a>
            <a
              href="https://www.zomato.com"
              target="_blank"
              rel="noreferrer"
              className="comic-border bg-cream text-ink px-6 py-3 font-heading uppercase tracking-wider hover:-translate-y-1 transition-transform"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        <div className="comic-border-lg bg-cream overflow-hidden min-h-[420px]">
          <iframe
            title="The Big Mama Al Warqa map"
            src="https://www.google.com/maps?q=The+Big+Mama+Al+Warqa+Dubai&output=embed"
            className="w-full h-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="comic-border bg-cream text-ink p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-primary">{icon}</span>
        <span className="font-heading uppercase tracking-wider">{title}</span>
      </div>
      <p className="text-sm text-ink/80 leading-relaxed">{children}</p>
    </div>
  );
}
