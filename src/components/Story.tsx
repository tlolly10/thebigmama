import interior from "@/assets/interior.jpg";
import storefront from "@/assets/storefront.jpg";

export function Story() {
  return (
    <section id="story" className="bg-ink text-cream py-20 md:py-28 border-y-[4px] border-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 halftone" style={{ backgroundImage: "radial-gradient(var(--color-cream) 1px, transparent 1.5px)" }} />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src={interior} alt="Comic-themed interior" className="comic-border-red w-full h-72 object-cover -rotate-2" />
          <img src={storefront} alt="The Big Mama storefront" className="comic-border-red w-full h-72 object-cover rotate-2 mt-10" />
        </div>
        <div>
          <div className="inline-block comic-border bg-primary text-primary-foreground px-4 py-1 font-heading uppercase mb-4 rotate-[-2deg]">
            Our Story
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight">
            A neighborhood diner with a
            <span className="text-primary"> super-hero appetite.</span>
          </h2>
          <p className="mt-5 text-lg text-cream/85 leading-relaxed">
            Since 2018, The Big Mama has been Al Warqa's go-to for honest, generous,
            comfort food. Walk in and you'll find Marvel posters on brick walls, the
            sizzle of fresh Angus on the grill, and a team that treats you like family.
          </p>
          <p className="mt-3 text-lg text-cream/85 leading-relaxed">
            No frills. No shortcuts. Just real burgers, real steaks, real love.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "7+", l: "Years Serving" },
              { n: "1,400+", l: "Happy Reviews" },
              { n: "4.7★", l: "Google Rating" },
            ].map((s) => (
              <div key={s.l} className="comic-border bg-cream text-ink p-4 text-center">
                <div className="font-display text-3xl text-primary">{s.n}</div>
                <div className="font-heading uppercase text-xs tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
