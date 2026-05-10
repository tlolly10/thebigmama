import { useState } from "react";
import wings from "@/assets/wings.jpg";
import steak from "@/assets/steak.jpg";
import fried from "@/assets/fried.jpg";
import wrap from "@/assets/wrap.jpg";
import wrap2 from "@/assets/wrap2.jpg";
import bowl from "@/assets/bowl.jpg";

type Item = { name: string; desc: string; price: string; tag?: string };
type Category = { id: string; label: string; tagline: string; img: string; items: Item[] };

const categories: Category[] = [
  {
    id: "burgers",
    label: "Burgers",
    tagline: "Served with French fries",
    img: wings,
    items: [
      { name: "Angus Burger", desc: "Pure Angus beef patty topped with iceberg lettuce, BBQ onions, tomato, cucumber, cheese, mayonnaise & ketchup.", price: "L 25 / XL 30 / XXL 35", tag: "BESTSELLER" },
      { name: "Crunchy Burger", desc: "Golden fried chicken fillet with iceberg lettuce, BBQ onions & mayo.", price: "L 27 / XL 30 / XXL 35" },
      { name: "Grilled Chicken Burger", desc: "Grilled chicken breast, lettuce, tomato, onion, pickles & mayo.", price: "L 27 / XL 30 / XXL 35" },
      { name: "Mushroom & Swiss", desc: "Beef patty with fresh mushrooms in special sauce, topped with Swiss cheese.", price: "L 30 / XL 35 / XXL 40" },
      { name: "Ocean Burger", desc: "Cod-fish fillet with cheese & iceberg lettuce, tartar sauce.", price: "AED 35" },
      { name: "Roast Beef", desc: "Roast beef with special melted cheese mix in a bun.", price: "AED 27" },
    ],
  },
  {
    id: "wraps",
    label: "Wraps",
    tagline: "30 AED for any wrap",
    img: wrap,
    items: [
      { name: "TBM Signature Chicken", desc: "Fresh tortilla wrap stuffed with juicy grilled chicken, cheese, iceberg lettuce, pickles, Mama sauce & garlic sauce.", price: "AED 30", tag: "SIGNATURE" },
      { name: "TBM Buffalo", desc: "Fresh tortilla wrap with chicken chunks, iceberg lettuce, pickles, cheese, infused with Buffalo sauce.", price: "AED 30" },
      { name: "TBM BBQ", desc: "Fresh tortilla wrap with BBQ chicken chunks, iceberg lettuce, pickles, cheese, with BBQ sauce.", price: "AED 30" },
      { name: "TBM Seafood", desc: "Fresh tortilla wrap stuffed with fried shrimps, calamari, cheese, iceberg lettuce, pickles, garlic sauce.", price: "AED 30" },
      { name: "TBM Greek", desc: "Tortilla wrap with grilled chicken, beef, onion, bell peppers, jalapeño, sweet corn, cheddar cheese, BBQ & Mexican sauce.", price: "AED 30" },
      { name: "TBM Mexican", desc: "Tortilla wrap with grilled chicken or beef, sour cream, bell peppers, jalapeño, sweet corn, cheddar cheese, BBQ & Mexican sauce.", price: "AED 30" },
      { name: "TBM Beef & Bacon", desc: "Tortilla wrap with beef bacon, sliced beef, onions, lettuce, cheddar cheese, with Mexican BBQ sauce.", price: "AED 30" },
    ],
  },
  {
    id: "long-bread",
    label: "Long Bread",
    tagline: "29 AED for any long bread — served with French fries",
    img: fried,
    items: [
      { name: "Philly Steak", desc: "Our special steak slices in the seasoning with sliced onions, sliced capsicum, jalapeño & cheese mix.", price: "AED 29" },
      { name: "Francisco", desc: "Sliced chicken, sliced onions, sliced capsicum & some sweet corn all seasoned in our own spices and cheese sauce.", price: "AED 29" },
      { name: "PO Boy", desc: "Fried shrimps on top of spicy coleslaw and cheese.", price: "AED 29" },
      { name: "Hotdog", desc: "Long beef hotdog with juicy melting with our special grill beef, onions, pickles, our cheesy cheese & some mayo, ketchup & mustard on top.", price: "AED 29" },
    ],
  },
  {
    id: "healthy",
    label: "Healthy Meals",
    tagline: "Dive into our healthy meals",
    img: steak,
    items: [
      { name: "Steak", desc: "Ribeye served with grilled vegetables, mashed potatoes & gravy sauce.", price: "AED 47", tag: "CHEF'S PICK" },
      { name: "Chicken", desc: "Chicken breasts served with grilled vegetables, mashed potatoes & gravy sauce.", price: "AED 37" },
      { name: "Salmon", desc: "Salmon steak served with grilled vegetables, mashed potatoes & gravy sauce.", price: "AED 39" },
    ],
  },
  {
    id: "currys",
    label: "Currys & Pastas",
    tagline: "Try our yummy currys & fresh pastas",
    img: bowl,
    items: [
      { name: "TBM Chicken Curry", desc: "Rice topped with chicken & vegetables, served with our special curry sauce.", price: "AED 21" },
      { name: "TBM Beef Curry", desc: "Rice topped with sliced beef & vegetables, served with our special curry sauce.", price: "AED 22" },
      { name: "TBM Seafood Curry", desc: "Rice topped with shrimps, cod fish, calamari & vegetables, served with our special curry sauce.", price: "AED 25" },
      { name: "Chicken Pasta", desc: "Penne pasta served with pink sauce, sliced chicken, topped with Parmesan cheese.", price: "AED 27" },
      { name: "Meatball Spaghetti Pasta", desc: "Tasty beef balls grilled and topped with Parmesan cheese, tomatoes & onions, served with your favorite sauce.", price: "AED 27" },
      { name: "Creamy Seafood Pasta", desc: "Tasty seafood mix cooked with penne pasta, topped with Parmesan, served with your favorite sauce.", price: "AED 34" },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    tagline: "Sandwiches, wraps & sweet breakfast",
    img: wrap2,
    items: [
      { name: "New Club", desc: "Grilled chicken, roast beef, cream cheese, mustard, mozzarella cheese on grilled toast bread.", price: "AED 19" },
      { name: "3 Cheese", desc: "Cream cheese, mozzarella & cheddar cheese on grilled brioche bread.", price: "AED 17" },
      { name: "The Original Wrap", desc: "Omelette with cheddar cheese wrapped and served with hash brown & turkey sausages.", price: "AED 17" },
      { name: "Steak Omelette Wrap", desc: "Omelette with bell pepper, steak slices, onions, cheddar cheese, served with sausages & hash brown.", price: "AED 19" },
      { name: "Chicken Omelette Wrap", desc: "Omelette with bell peppers, sliced chicken, onions, cheddar cheese, served with sausages & hash brown.", price: "AED 19" },
      { name: "Fluffy Pancake", desc: "Our special house-made mix topped with icecream, drizzle of peanut butter, blueberries, strawberries & chocolate sauce.", price: "AED 19" },
      { name: "Love Toast", desc: "Brioche toast butter dipped, grilled to a golden brown & dusted with cinnamon, topped with fresh blueberries, strawberries & maple syrup.", price: "AED 17" },
      { name: "California Omelette", desc: "Special 3-egg omelette stuffed with cheese, served with sausages, hash brown, rocket leaves, Spanish leaves, grilled tomatoes, sautéed mushrooms & sliced avocado.", price: "AED 27" },
    ],
  },
  {
    id: "drinks",
    label: "Milkshakes • Mojitos • Smoothies",
    tagline: "All milkshakes & mojitos 22 AED — smoothies 22 AED",
    img: wings,
    items: [
      { name: "Deep Brown Chocolate Shake", desc: "Perfect for all chocolate lovers.", price: "AED 22", tag: "POPULAR" },
      { name: "Strawberry White Choco Shake", desc: "Tasty white chocolate & strawberry blend.", price: "AED 22" },
      { name: "Banana Toffee Candy Shake", desc: "Mouth-watering blend of banana with toffee.", price: "AED 22" },
      { name: "Pistachio Tree Shake", desc: "Pistachio purée and pistachio seeds.", price: "AED 22" },
      { name: "Big Mama Shake", desc: "Tasty white banana, strawberries, blueberries & coconut.", price: "AED 22" },
      { name: "TBM Moji", desc: "Fresh blueberries, fresh passion fruit with sprite, served with fresh mint leaves & lemon slices.", price: "AED 22" },
      { name: "Lemon Moji", desc: "Fresh lemon juice with fresh mint leaves, sprite & lemon slices.", price: "AED 22" },
      { name: "Pineapple Moji", desc: "Fresh pineapple with fresh mint leaves, sprite & lemon slices.", price: "AED 22" },
      { name: "Big Mama Love Smoothie", desc: "Raspberry, blueberry & banana.", price: "AED 22" },
      { name: "Mad Mango Smoothie", desc: "Mango, pineapple & passion fruit.", price: "AED 22" },
      { name: "Açaí Bowl", desc: "Açaí cream, granola, banana, peanut butter, coconut, almonds, pumpkin seeds, almond seeds, cookies, fruits, sliced almond & honey.", price: "AED 27 / 32", tag: "NEW" },
    ],
  },
];

export function MenuSection() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative py-20 md:py-28">
      <div className="absolute inset-0 halftone-red opacity-[0.06] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-10">
          <div className="inline-block comic-border bg-accent px-4 py-1 font-heading uppercase rotate-[-2deg] mb-4">
            The Full Menu
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase">
            Mama's <span className="text-primary">Greatest Hits</span>
          </h2>
          <p className="mt-3 text-lg text-foreground/70 max-w-2xl mx-auto">
            Real food. Generous portions. Pick a category and dig in.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`comic-border font-heading uppercase tracking-wider px-4 py-2 text-sm md:text-base transition-transform hover:-translate-y-0.5 ${
                active === c.id ? "bg-primary text-primary-foreground" : "bg-card text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Section header */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
          <h3 className="font-display text-3xl md:text-5xl uppercase">
            <span className="text-primary">{current.label}</span>
          </h3>
          <span className="font-heading uppercase text-sm bg-ink text-cream px-3 py-1">
            {current.tagline}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map((it, i) => (
            <article
              key={it.name}
              className="comic-border bg-card p-5 flex flex-col gap-2"
              style={{ transform: `rotate(${i % 2 ? 0.4 : -0.4}deg)` }}
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-xl md:text-2xl uppercase leading-tight">
                  {it.name}
                </h4>
                {it.tag && (
                  <span className="comic-border bg-accent text-accent-foreground px-2 py-0.5 font-heading text-[10px] uppercase whitespace-nowrap">
                    {it.tag}
                  </span>
                )}
              </div>
              <p className="text-sm text-foreground/75 flex-1">{it.desc}</p>
              <div className="pt-2 mt-1 border-t-2 border-ink/20 font-heading text-primary text-lg">
                {it.price}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.talabat.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block comic-border-red bg-ink text-cream px-8 py-4 font-display text-2xl uppercase tracking-wider hover:-translate-y-1 transition-transform"
          >
            Order the Whole Menu →
          </a>
        </div>
      </div>
    </section>
  );
}
