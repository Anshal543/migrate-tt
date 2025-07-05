"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Cloud,
  Code,
  Database,
  LineChart,
  Rocket,
  Server,
  Smartphone,
  Store,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs with scalable architecture.",
    icon: <Code className="h-10 w-10" />,
    color: "from-primary to-blue-500",
    bgColor: "bg-blue-500/5",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications with intuitive user interfaces.",
    icon: <Smartphone className="h-10 w-10" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/5",
  },
  {
    title: "Web Development",
    description:
      "Responsive and performant web applications with modern frameworks and technologies.",
    icon: <Boxes className="h-10 w-10" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/5",
  },
  {
    title: "DevOps",
    description:
      "Streamline development and operations with automated workflows and CI/CD pipelines.",
    icon: <Server className="h-10 w-10" />,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/5",
  },
  {
    title: "IT Management",
    description:
      "Comprehensive IT management solutions to optimize your technology infrastructure.",
    icon: <Database className="h-10 w-10" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-cyan-500/5",
  },
  {
    title: "Ecommerce Solutions",
    description:
      "End-to-end ecommerce platforms with secure payment gateways and inventory management.",
    icon: <Store className="h-10 w-10" />,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/5",
  },
  {
    title: "Cloud Management",
    description:
      "Efficient cloud solutions with optimized resources and cost-effective scaling strategies.",
    icon: <Cloud className="h-10 w-10" />,
    color: "from-sky-500 to-indigo-500",
    bgColor: "bg-indigo-500/5",
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with advanced analytics and visualization tools.",
    icon: <LineChart className="h-10 w-10" />,
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-500/5",
  },
  {
    title: "Startup Solutions",
    description:
      "Accelerate your startup with tailored technology solutions and strategic guidance.",
    icon: <Rocket className="h-10 w-10" />,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/5",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  return (
    <section className="py-20 relative in-center" id="services" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background  to-muted/20" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            className="text-sm font-medium text-primary mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Expertise
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Digital Services
          </motion.h2>
          <motion.p
            className="text-muted-foreground mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a wide range of services to help businesses thrive in the
            digital landscape. Our team of experts is dedicated to delivering
            exceptional results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <EnhancedServiceCard service={service} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnhancedServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const titleControls = useAnimation();
  const descControls = useAnimation();
  const iconControls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    titleControls.start({
      y: -10,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    });
    descControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
    });
    iconControls.start({
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    titleControls.start({
      y: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    });
    descControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    });
    iconControls.start({
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    });
  };

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className="relative h-full card-border"
    >
      <div
        className={cn(
          "absolute inset-0 rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          service.bgColor
        )}
      />

      <Card className="h-full backdrop-blur-sm border-border/20 overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative z-10 bg-background rounded-2xl p-6 justify-between">
        <CardHeader className="relative">
          <motion.div
            className={cn(
              "w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r mb-4",
              `bg-gradient-to-r ${service.color} text-white`
            )}
            animate={iconControls}
          >
            {service.icon}
          </motion.div>

          <motion.div className="overflow-hidden">
            <motion.div animate={titleControls}>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 1, y: 0 }} animate={descControls}>
            <CardDescription>{service.description}</CardDescription>
          </motion.div>
        </CardHeader>

        <CardFooter>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button variant="ghost" className="p-0 h-auto group">
              <span className="text-sm">Learn more</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </CardFooter>

        {/* Animated border effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </Card>
    </motion.div>
  );
}
