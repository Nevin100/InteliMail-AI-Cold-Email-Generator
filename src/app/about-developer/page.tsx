"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">About Developer</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;m a full-stack developer with a passion for building useful
          tools using modern web technologies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="https://avatars.githubusercontent.com/u/146621784?v=4"
            alt="Developer Avatar"
            width={256}
            height={256}
            className="rounded-2xl object-cover shadow-xl border"
          />
        </div>

        {/* Bio Card */}
        <Card className="bg-muted/50 border-none shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              Hey, I&apos;m Nevin Bali 👋
            </h2>
            <p className="text-muted-foreground mb-4">
              I built <strong>InteliMail</strong> – an AI-powered cold email
              generator to help students, professionals and many others to
              create smart, personalized emails instantly.
              <br />
              <br />
              Want to explore more or contribute?
              <br />
              Head over to my
              <Button className="p-2" variant="link">
                <Link
                  href="https://github.com/Nevin100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary "
                >
                  GitHub profile
                </Link>
              </Button>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
