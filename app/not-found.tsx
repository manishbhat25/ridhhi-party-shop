import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="text-xs tracking-[0.28em] text-ink-soft uppercase">
        {site.locality}
      </p>
      <h1 className="font-display mt-4 text-5xl tracking-tight md:text-7xl">
        This page isn’t here.
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The shop still is. Come back to the celebration.
      </p>
      <div className="mt-8">
        <Button href="/" variant="ink">
          Back to Ridhhi
        </Button>
      </div>
    </main>
  );
}
