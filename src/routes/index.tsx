import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/Menu";
import { Story } from "@/components/Story";
import { Reviews } from "@/components/Reviews";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Big Mama Al Warqa — Burgers, Steaks & Wings in Dubai" },
      {
        name: "description",
        content:
          "The Big Mama Al Warqa: juicy Angus burgers, fresh steaks and crispy wings in Al Warqa 2, Dubai. 4.7★ from 1,400+ reviews. Open daily 12pm–1:30am.",
      },
      { property: "og:title", content: "The Big Mama Al Warqa — Burgers, Steaks & Wings" },
      { property: "og:description", content: "Comic-book diner in Al Warqa 2 serving mama-sized portions since 2018. 4.7★ on Google." },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "https://thebigmama.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://thebigmama.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "The Big Mama Al Warqa",
          image: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/98bc2ec2-575d-448a-ad57-76ca6f69cf18/id-preview-cd8dbb9c--75f384fc-39c2-4855-8a32-d987186b0243.lovable.app-1778360469088.png",
          url: "https://thebigmama.lovable.app/",
          servesCuisine: ["American", "Burgers", "Steaks"],
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tripoli Street, Al Warqa 2",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "12:00",
              closes: "01:30",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "1400",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <Story />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
