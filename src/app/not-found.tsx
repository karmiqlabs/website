import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="glow-mesh relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
      <div className="relative text-center">
        <div className="mono text-7xl font-bold text-accent">404</div>
        <h1 className="mt-4 text-2xl font-semibold">This page took a migration elsewhere.</h1>
        <p className="mx-auto mt-2 max-w-sm text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button href="/" className="mt-8">
          Back home
        </Button>
      </div>
    </section>
  );
}
