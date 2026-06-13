import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page mx-auto max-w-xl py-20 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
