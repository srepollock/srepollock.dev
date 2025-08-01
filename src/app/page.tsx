import AdSense from "@/components/adsense";
import { Button } from "@/components/ui/button";
import { Github, Globe, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-md text-center">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-2 font-headline">Spencer Pollock</h1>
        </header>

        <div className="w-full space-y-4 mb-12">
          <Button asChild className="w-full" size="lg">
            <a
              href="https://spollock.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Globe className="mr-2 h-5 w-5" />
              Website
            </a>
          </Button>
          <Button asChild className="w-full" size="lg">
            <a
              href="https://github.com/srepollock"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button asChild className="w-full" size="lg">
            <a
              href="https://linkedin.com/in/srepollock"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        <AdSense
          className="w-full h-24"
          client="ca-pub-8650073157913510"
          slot="1234567890" // This is a placeholder slot
        />
      </main>
    </div>
  );
}
