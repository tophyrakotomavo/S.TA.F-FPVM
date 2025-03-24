import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export const Hero = () => (
  <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4">
    {/* Background gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-50/50 to-transparent" />

    {/* Content */}
    <div className="max-w-5xl mx-auto text-center space-y-8">
      {/* New badge */}
      <div className="inline-flex items-center gap-2 bg-white border-primary rounded-full px-4 py-1 shadow-md">
        <span className="bg-primary text-white text-sm px-2 py-0.5 rounded-full">
          New
        </span>
        <span className="text-sm font-semibold">1.1.0 is out now!</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Root Access
        <br />
        from{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-primary text-transparent bg-clip-text">
          Madagascar
        </span>{" "}
        to the World
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        We&apos;re more than just a team, we&apos;re a community of passionate
        developers. Get access to exclusive resources, services, and support.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
          <Link href="/signin">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="https://github.com/zanaroot/zanaroot" target="_blank">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Github
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
