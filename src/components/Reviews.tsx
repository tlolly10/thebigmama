import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mame Zeki",
    when: "2 months ago",
    text: "The salmon was outstanding, the burger packed with flavor, and the steak cooked exactly right. Easily one of the best meals I've had in Dubai.",
    badge: "Local Guide",
  },
  {
    name: "Mahnoor Imtiaz",
    when: "1 year ago",
    text: "A hidden gem. Welcoming atmosphere, attentive service and delightful meals. We come every time and leave with full hearts and stomachs.",
    badge: "Local Guide",
  },
  {
    name: "Manuel Anthony",
    when: "8 months ago",
    text: "Came in last minute before closing — perfect. The burgers, the fries, the sauce, the shrimps... delicious, simple, aesthetic. Love it.",
    badge: "Local Guide",
  },
  {
    name: "Asma S",
    when: "1 year ago",
    text: "Really great comfort food and fast service! Generous portions, juicy burgers, and the milkshake is light and lovely. Highly recommend.",
    badge: "Local Guide",
  },
  {
    name: "Hafsa Zaghmout",
    when: "3 years ago",
    text: "Fresh, hot and extra crunchy! Fried shrimp and calamari were sizzling, fries were from heaven. Service was great and welcoming. A staple now.",
    badge: "Local Guide",
  },
  {
    name: "Candy Jadam",
    when: "2 months ago",
    text: "Very tasty food, very affordable prices. Razu was amazing and very attentive. Highly recommend for the service and the food quality.",
    badge: "Local Guide",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 halftone opacity-[0.05] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block comic-border bg-accent px-4 py-1 font-heading uppercase rotate-[2deg] mb-4">
            Loved by Dubai
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase">
            <span className="text-primary">4.7★</span> from 1,427 Foodies
          </h2>
          <div className="flex gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="fill-accent text-accent" strokeWidth={1.5} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="comic-border bg-card p-6 relative"
              style={{ transform: `rotate(${i % 2 ? 0.4 : -0.4}deg)` }}
            >
              <Quote className="absolute -top-3 -left-3 bg-primary text-primary-foreground p-1 rounded-full" size={32} strokeWidth={2.5} />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" strokeWidth={1.5} />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-4 pt-4 border-t-2 border-dashed border-ink/30 flex items-center justify-between">
                <div>
                  <div className="font-heading uppercase tracking-wide">{r.name}</div>
                  <div className="text-xs text-foreground/60">{r.when}</div>
                </div>
                <span className="text-[10px] uppercase font-bold bg-ink text-cream px-2 py-1">{r.badge}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://share.google/owqyWqgX0lhz6RMfi"
            target="_blank"
            rel="noreferrer"
            className="inline-block comic-border bg-cream px-6 py-3 font-heading uppercase tracking-wider hover:-translate-y-0.5 transition-transform"
          >
            Read all 1,427 Google reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
