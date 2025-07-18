import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundPattern } from "./background-pattern";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Features from "@/components/Custom/Features";
import FAQ from "../Custom/FAQ";
import CTABanner from "../Custom/CTABanner";

const Background = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-6 relative">
        <BackgroundPattern />
        <div className="relative z-10 text-center max-w-2xl">
          <Badge className="bg-gradient-to-br from-primary via-muted/30 to-primary text-white rounded-full py-2 px-3 border-none text-sm tracking-wide shadow">
            🚀 AI Cold Email Generator v1.0
          </Badge>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Let AI Craft Your Perfect Cold Email — in Seconds.
          </h1>

          <p className="mt-6 text-[17px] md:text-lg text-muted-foreground">
            Just tell us the role, company type, job position, your skills,
            projects, and a couple of things about yourself — and we’ll generate
            a compelling, human-like email ready to send.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base px-6">
              <Link href="/mail-generated" className="flex items-center gap-2">
                Get Started <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base px-6"
            >
              <Link href="/blog" className="flex items-center gap-2">
                About Me <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Features />
      <FAQ />
      <CTABanner />
    </>
  );
};

export default Background;
