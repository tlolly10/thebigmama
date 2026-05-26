export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971000000000?text=Hi%20Big%20Mama!%20I%27d%20like%20to%20order."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 comic-border bg-[oklch(0.65_0.18_145)] text-cream px-4 py-3 font-heading uppercase tracking-wider hover:-translate-y-1 transition-transform"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.05 4.91A10 10 0 0 0 2.16 17.5L1 23l5.66-1.49a10 10 0 0 0 12.39-16.6ZM12 21.18a9.18 9.18 0 0 1-4.68-1.28l-.34-.2-3.36.88.9-3.27-.22-.34A9.2 9.2 0 1 1 12 21.18Zm5.27-6.88c-.29-.14-1.7-.84-1.97-.94s-.46-.14-.65.15-.74.94-.91 1.13-.34.22-.62.07a7.55 7.55 0 0 1-2.22-1.37 8.4 8.4 0 0 1-1.55-1.93c-.16-.29 0-.44.13-.58s.29-.34.43-.5a2 2 0 0 0 .29-.48.54.54 0 0 0 0-.5c-.07-.15-.65-1.57-.89-2.16s-.47-.5-.65-.5h-.55a1 1 0 0 0-.78.36 3.13 3.13 0 0 0-1 2.32 5.45 5.45 0 0 0 1.13 2.86 12.46 12.46 0 0 0 4.74 4.18c.66.29 1.18.46 1.59.59a3.84 3.84 0 0 0 1.75.11 2.86 2.86 0 0 0 1.88-1.32 2.32 2.32 0 0 0 .16-1.32c-.07-.13-.26-.2-.55-.34Z"/>
      </svg>
      WhatsApp
    </a>
  );
}
