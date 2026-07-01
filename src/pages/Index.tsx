import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Mail, Phone, MapPin, Github, Instagram, MessageCircle,
  Code2, Briefcase, GraduationCap, Languages, Heart,
  Sparkles, ArrowRight, ArrowDown, Download
} from "lucide-react";
import salmaPhoto from "./../assets/salma.jpg";

const GITHUB_URL = "https://github.com/salma-dev1";
const INSTAGRAM_URL = "https://www.instagram.com/salma.skk1";
const EMAIL = "mailto:salmasakkak2@gmail.com";
const WHATSAPP = "https://wa.me/212712041195";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Python",
  "Java",
  "C",
  "UML",
  "MySQL",
  "GitHub",
  "AWS S3",
  "Software Engineering",
  "Webentwicklung",
  "Microsoft Office",
  "Debugging"
];

const formations = [
  {
    title: "Informatikstudium",
    school: "EMSI Casablanca",
    years: "2020 — 2023"
  },
  {
    title: "Abitur – Physikwissenschaften",
    school: "Gymnasium Al Baida, Casablanca",
    years: "07/2020"
  }
];

const experiences = [
  {
    role: "Praktikum – Webentwicklung",
    place: "FORMAT PRINT, Casablanca",
    years: "10/2025 — 12/2025",
    points: [
      "Entwicklung einer Webanwendung (CARE4U Website)",
      "Analyse von Anforderungen und technischen Spezifikationen",
      "Frontend- und Backend-Entwicklung (HTML, CSS, JavaScript, PHP, Python, Java)",
      "Fehlerbehebung und Performance-Optimierung",
      "Teamarbeit in einem agilen Entwicklungsumfeld"
    ]
  }
];

// Reveal wrapper
const Reveal = ({ children, delay = 0, y = 40 }: { children: React.ReactNode; delay?: number; y?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

// Animated text per word
const AnimatedWords = ({ text, className = "" }: { text: string; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// Magnetic button wrapper
const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        setPos({ x: (e.clientX - rect.left - rect.width / 2) * 0.3, y: (e.clientY - rect.top - rect.height / 2) * 0.3 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const rawPhotoY = useTransform(scrollY, [0, 800], [0, -40]);
  const photoY = useSpring(rawPhotoY, { stiffness: 60, damping: 20 });

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Custom cursor
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setCursorHover(!!t.closest("a,button"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block mix-blend-difference"
        animate={{ x: cursor.x - 12, y: cursor.y - 12, scale: cursorHover ? 2.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.3 }}
      >
        <div className="w-6 h-6 rounded-full bg-white" />
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] gradient-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* NAV */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border"
      >
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="font-serif text-xl font-bold tracking-tight">
            Salma<span className="text-gradient">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Profil", "Fähigkeiten", "Erfahrung", "Kontakt"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${["about", "skills", "experience", "contact"][i]}`}
                className="relative hover:text-accent transition-smooth group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Magnetic>
              <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
               <a href="/lebenslauf-salma-sakkak.pdf" download="Lebenslauf-salma-sakkak.pdf">
               <Download className="w-4 h-4 mr-1.5" /> Lebenslauf
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="sm" className="gradient-accent border-0 hover:opacity-90">
                <a href="#contact">Kontaktieren Sie mich</a>
              </Button>
            </Magnetic>
          </div>
        </div>
      </motion.header>

      {/* HERO */}
      <section ref={heroRef} id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden gradient-hero text-primary-foreground flex items-center">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-20 -left-20 w-[400px] h-[400px] gradient-accent opacity-20 blur-3xl animate-blob"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />

        <motion.div style={{ opacity: heroOpacity }} className="container relative grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur">
                <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Sparkles className="w-3 h-3 mr-1 inline" />
                </motion.span>
                Offen für Ausbildungs- und Praktikumsmöglichkeiten
              </Badge>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
              <AnimatedWords text="Salma" />
              <br />
              <span className="text-gradient bg-[length:200%_auto] animate-gradient-shift inline-block" style={{ backgroundImage: "linear-gradient(90deg, hsl(25 80% 60%), hsl(35 85% 65%), hsl(25 80% 60%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <AnimatedWords text="Sakkak" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-white/80 font-light"
            >
              Angehende IT-Fachkraft
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="text-white/70 max-w-lg leading-relaxed"
            >
              Ich suche eine Ausbildung im IT-Bereich und interessiere mich für Fachinformatik, IT-Support, Softwareentwicklung und Datenverarbeitung.         </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Magnetic>
                <Button asChild size="lg" className="gradient-accent border-0 hover:opacity-90 shadow-glow">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/30 text-white hover:bg-white/15 backdrop-blur">
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/30 text-white hover:bg-white/15 backdrop-blur">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" /> Instagram
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary border-white hover:bg-white/90"
                >
                  <a href="/lebenslauf-salma-sakkak.pdf" download="Lebenslauf-Salma-Sakkak.pdf">
                    <Download className="w-4 h-4 mr-2" /> Lebenslauf herunterladen
                  </a>
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center md:justify-end md:sticky md:top-24 self-start"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 gradient-accent rounded-full blur-3xl opacity-30"
            />
            <div className="relative">
              <motion.div
                animate={{ rotate: [6, 12, 6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 gradient-accent rounded-[2rem]"
              />
              <motion.img
                whileHover={{ scale: 1.03, rotate: -2 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                src={salmaPhoto}
                alt="Portrait von Salma Sakkak"
                className="relative w-72 h-96 md:w-80 md:h-[28rem] object-cover rounded-[2rem] shadow-elegant border-4 border-white/20"
              />
              {/* Floating tags */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-10 bg-white/95 backdrop-blur text-foreground px-4 py-2 rounded-2xl shadow-elegant text-sm font-semibold flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-accent" /> Full-Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-20 bg-white/95 backdrop-blur text-foreground px-4 py-2 rounded-2xl shadow-elegant text-sm font-semibold flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-accent" />  Angehende IT-Fachkraft
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs flex flex-col items-center gap-2"
        >
          <span className="tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="py-6 bg-primary text-primary-foreground overflow-hidden border-y border-border">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {["Webentwicklung", "Softwareentwicklung", "Full-Stack-Entwicklung", "Frontend-Entwicklung", "Backend-Entwicklung", "Datenbanken (MySQL)", "Programmiersprachen (Java, PHP, Python, JavaScript)", "UML-Modellierung", "Git / GitHub", "React" ].map((w, i) => (
                <span key={i} className="flex items-center gap-12 text-2xl font-serif font-bold">
                  {w}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT cards */}
      <section id="about" className="py-20">
        <div className="container grid md:grid-cols-3 gap-8">
          {[
            { icon: Phone, title: "Telefon", text: "+212 712 041 195" },
            { icon: Mail, title: "E-Mail", text: "salmasakkak2@gmail.com" },
            { icon: MapPin, title: "Standort", text: "Casablanca, Marokko" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="p-6 gradient-card shadow-soft border-0 hover:shadow-elegant transition-smooth group h-full">
                  <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                    <item.icon className="w-8 h-8 text-accent mb-3" />
                  </motion.div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm break-all">{item.text}</p>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 bg-secondary/40 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 -top-40 w-96 h-96 gradient-accent opacity-10 rounded-full blur-3xl"
        />
        <div className="container relative">
          <Reveal>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-3"><Code2 className="w-3 h-3 mr-1" /> Technische Fähigkeiten</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Technische Fähigkeiten <span className="text-gradient">Techniques</span></h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.04, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <Badge className="px-4 py-2 text-sm bg-card text-foreground border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth cursor-default">
                  {s}
                </Badge>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Languages, title: "Sprachen", items: ["Arabisch — Muttersprache", "Französisch — Sehr gut", "Englisch — Gut", "Deutsch — B1 (B2 in Vorbereitung)"] },
              { icon: Heart, title: "Interessen", items: ["Webentwicklung", "Neue Technologien", "Reisen", "Sport"] },
              { icon: Sparkles, title: "Eigenschaften", items: ["Motiviert", "Lernbereit", "Teamfähig"] },
            ].map((g, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <motion.div whileHover={{ y: -8, rotateY: 5 }} transition={{ type: "spring", stiffness: 300 }} style={{ transformPerspective: 1000 }}>
                  <Card className="p-6 border-0 shadow-soft gradient-card hover:shadow-elegant transition-smooth h-full">
                    <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
                      <g.icon className="w-7 h-7 text-accent mb-3" />
                    </motion.div>
                    <h3 className="font-semibold mb-3">{g.title}</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {g.items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ZERTIFIKATE */}
<section id="zertifikate" className="py-20 bg-secondary/40">
  <div className="container max-w-5xl">

    <div className="text-center mb-12">
      <Badge variant="outline" className="mb-3">
        <Code2 className="w-3 h-3 mr-1" /> Zertifikate
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold">
        IT- und <span className="text-gradient">Zertifikate</span>
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <Card className="p-6 border-0 shadow-soft gradient-card">
        <h3 className="text-xl font-bold mb-3">Coursera & Online Kurse</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Programming for Everybody (Python)</li>
          <li>Software Engineering & UML</li>
          <li>AWS S3 Basics</li>
          <li>Arduino & C Programming</li>
        </ul>
      </Card>

      <Card className="p-6 border-0 shadow-soft gradient-card">
        <h3 className="text-xl font-bold mb-3">IT & Web Entwicklung</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>HTML, CSS, JavaScript, PHP</li>
          <li>GitHub & Version Control</li>
          <li>Microsoft Office</li>
          <li>Web Projects</li>
        </ul>
      </Card>

    </div>
  </div>
</section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20">
        <div className="container max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-3"><Briefcase className="w-3 h-3 mr-1" /> Beruflicher Werdegang </Badge>
              <h2 className="text-4xl md:text-5xl font-bold"> Berufserfahrung <span className="text-gradient">im Überblick</span></h2>
            </div>
          </Reveal>
          <div className="relative space-y-6">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-4 top-0 bottom-0 w-0.5 gradient-accent origin-top hidden md:block"
            />
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative md:pl-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                    className="absolute left-2 top-8 w-5 h-5 rounded-full gradient-accent border-4 border-background shadow-glow hidden md:block animate-pulse-glow"
                  />
                  <Card className="p-6 md:p-8 border-0 shadow-soft hover:shadow-elegant transition-smooth gradient-card group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-accent transition-smooth">{exp.role}</h3>
                        <p className="text-muted-foreground text-sm">{exp.place}</p>
                      </div>
                      <Badge className="gradient-accent border-0 text-white w-fit">{exp.years}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((p, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + j * 0.1 }}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <ArrowRight className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                          <span>{p}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATION */}
      <section className="py-20 bg-secondary/40">
        <div className="container max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-3"><GraduationCap className="w-3 h-3 mr-1" /> Ausbildung</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Akademischer <span className="text-gradient">Werdegang</span></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {formations.map((f, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 border-0 shadow-soft hover:shadow-elegant transition-smooth gradient-card h-full">
                    <Badge className="mb-3 gradient-accent border-0 text-white">{f.years}</Badge>
                    <h3 className="font-bold mb-1 leading-snug">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.school}</p>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-20">
        <div className="container max-w-4xl">
          <Reveal>
            <Card className="p-10 md:p-16 gradient-hero text-primary-foreground border-0 shadow-elegant text-center relative overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-64 h-64 gradient-accent rounded-full blur-3xl opacity-30"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], rotate: [360, 180, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl"
              />
              <div className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                   Offen für <span className="text-gradient">neue Möglichkeiten</span>
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                   Ich freue mich über spannende Projekte, Praktika sowie Ausbildungs- und Karrieremöglichkeiten im Bereich Informatik. Kontaktieren Sie mich gerne.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { href: WHATSAPP, icon: MessageCircle, label: "WhatsApp", primary: true },
                    { href: GITHUB_URL, icon: Github, label: "GitHub" },
                    { href: INSTAGRAM_URL, icon: Instagram, label: "Instagram" },
                    { href: EMAIL, icon: Mail, label: "Email" },
                  ].map((b) => (
                    <Magnetic key={b.label}>
                      <Button asChild size="lg" className={b.primary ? "gradient-accent border-0 hover:opacity-90 shadow-glow" : "bg-white/5 border-white/30 text-white hover:bg-white/15 backdrop-blur border"} variant={b.primary ? "default" : "outline"}>
                        <a href={b.href} target={b.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                          <b.icon className="w-4 h-4 mr-2" /> {b.label}
                        </a>
                      </Button>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Salma Sakkak. Alle Rechte vorbehalten</p>
          <div className="flex gap-4">
            {[
              { href: WHATSAPP, icon: MessageCircle },
              { href: GITHUB_URL, icon: Github },
              { href: INSTAGRAM_URL, icon: Instagram },
              { href: EMAIL, icon: Mail },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.2 }}
                className="hover:text-accent transition-smooth"
              >
                <s.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-accent shadow-glow flex items-center justify-center text-white animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default Index;