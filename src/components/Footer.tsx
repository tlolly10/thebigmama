export function Footer() {
  return (
    <footer className="bg-ink text-cream py-10 border-t-[4px] border-ink">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-cream bg-primary font-display text-xl">
            BM
          </div>
          <div>
            <div className="font-display text-xl tracking-wide">THE BIG MAMA</div>
            <div className="text-xs text-cream/60">Al Warqa, Dubai · Est. 2018</div>
          </div>
        </div>
        <div className="text-sm text-cream/70 text-center">
          © {new Date().getFullYear()} The Big Mama. Made with mama-love.
        </div>
        <div className="flex gap-3 text-sm">
          <a href="#menu" className="hover:text-accent">Menu</a>
          <a href="#reviews" className="hover:text-accent">Reviews</a>
          <a href="#visit" className="hover:text-accent">Visit</a>
        </div>
      </div>
    </footer>
  );
}
