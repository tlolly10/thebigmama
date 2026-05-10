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
