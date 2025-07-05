"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const benefits = [
  "Innovative tech stack and frameworks",
  "Collaborative work environment",
  "Agile development methodology",
  "Customer-centric approach",
  "Continuous learning and growth",
  "Results-driven solutions",
];

export function WorkWithUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 relative" id="work-with-us" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary">
              Join Forces With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let's Create Something
              <span className="block bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-muted-foreground">
              Partner with Tactech to bring your digital vision to life. Our
              collaborative approach ensures that we understand your business
              needs and deliver solutions that exceed expectations.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4">
              <Button size="lg" className="rounded-full group">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team working together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Collaborative Approach
                </h3>
                <p className="text-white/80 text-sm">
                  Our team works closely with you at every step to ensure your
                  vision becomes reality.
                </p>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-md p-6 rounded-xl border border-border/20 shadow-lg max-w-[240px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                95%
              </div>
              <p className="text-sm text-muted-foreground">
                Client satisfaction rate with our personalized solutions
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
