import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle,
  Code2, Briefcase, GraduationCap, Languages, Heart, Sparkles, ArrowRight
} from "lucide-react";
import douniaPhoto from "@/assets/dounia.jpeg";

const WHATSAPP = "https://wa.me/212783009908";
const LINKEDIN = "https://www.linkedin.com/in/sakkak-dounia-a6124a405";
const INSTAGRAM = "https://www.instagram.com/imdidouou";
const EMAIL = "mailto:jawadounia02@gmail.com";

const skills = [
  "HTML", "CSS", "Java", "Python", "C++", "C", "MySQL",
  "Firebase", "GitHub", "WordPress", "Canva",
  "Google Search Console", "Mailchimp", "Emailing"
];

const formations = [
  { title: "Technicien spécialisé en développement informatique", school: "EURELEC", years: "2023 — 2025" },
  { title: "Formation certifiée en Marketing Digital", school: "Digital Minds Academique", years: "2023 — 2024" },
  { title: "Baccalauréat en économie (GC)", school: "Lycée ALBAIDA", years: "2022 — 2023" },
  { title: "Technicien spécialisé en Gestion des entreprises — Commerce & Marketing", school: "ISGI", years: "En cours" },
];

const experiences = [
  {
    role: "Responsable Marketing Digital",
    place: "Casablanca (Technopark)",
    years: "2024 — 2025",
    points: ["Gérer les médias sociaux (création de posts LinkedIn, mise en avant des services)", "Envoyer des mails professionnels personnalisés"],
  },
  {
    role: "Stage Développeuse Web",
    place: "Casablanca — Centre TPE Solidaire",
    years: "2023 — 2024",
    points: ["Développement de site web pour la société", "Création de plateformes", "Gestion des réseaux sociaux"],
  },
  {
    role: "Commerciale — Banques participatives",
    place: "Casablanca (Abdelmoumen)",
    years: "2023 — 2024",
    points: ["Chargée de la clientèle", "Appels téléphoniques (questions + rendez-vous)"],
  },
  {
    role: "Téléconseillère francophone",
    place: "Casablanca (Maarif — Sidi Maarouf)",
    years: "2022 — 2024",
    points: ["Téléconseil énergies renouvelables", "Téléconseil assurance santé"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="#top" className="font-serif text-xl font-bold tracking-tight">
            Dounia<span className="text-gradient">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-smooth">À propos</a>
            <a href="#skills" className="hover:text-accent transition-smooth">Compétences</a>
            <a href="#experience" className="hover:text-accent transition-smooth">Expérience</a>
            <a href="#contact" className="hover:text-accent transition-smooth">Contact</a>
          </nav>
          <Button asChild variant="default" size="sm" className="gradient-accent border-0 hover:opacity-90">
            <a href="#contact">Me contacter</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 overflow-hidden gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="container relative grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Sparkles className="w-3 h-3 mr-1" /> Disponible pour de nouveaux projets
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Dounia <span className="text-gradient">Sakkak</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light">
              Développeuse Full-Stack & Responsable Marketing Digital
            </p>
            <p className="text-white/70 max-w-lg leading-relaxed">
              Passionnée par la création de solutions innovantes et fonctionnelles, le développement de logiciels et les technologies émergentes.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="gradient-accent border-0 hover:opacity-90 shadow-glow">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/30 text-white hover:bg-white/15">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/30 text-white hover:bg-white/15">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" /> Instagram
                </a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -inset-4 gradient-accent rounded-full blur-3xl opacity-30" />
            <div className="relative">
              <div className="absolute inset-0 gradient-accent rounded-[2rem] rotate-6" />
              <img
                src={douniaPhoto}
                alt="Portrait de Dounia Sakkak, développeuse Full-Stack"
                className="relative w-72 h-96 md:w-80 md:h-[28rem] object-cover rounded-[2rem] shadow-elegant border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="container grid md:grid-cols-3 gap-8">
          <Card className="p-6 gradient-card shadow-soft border-0 hover:shadow-elegant transition-smooth">
            <Phone className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-1">Téléphone</h3>
            <p className="text-muted-foreground text-sm">+212 7 83 00 99 08</p>
          </Card>
          <Card className="p-6 gradient-card shadow-soft border-0 hover:shadow-elegant transition-smooth">
            <Mail className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-muted-foreground text-sm break-all">jawadounia02@gmail.com</p>
          </Card>
          <Card className="p-6 gradient-card shadow-soft border-0 hover:shadow-elegant transition-smooth">
            <MapPin className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-1">Localisation</h3>
            <p className="text-muted-foreground text-sm">Hay Elwalae — Casablanca</p>
          </Card>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 bg-secondary/40">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-3"><Code2 className="w-3 h-3 mr-1" /> Stack technique</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Compétences <span className="text-gradient">Techniques</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((s) => (
              <Badge key={s} className="px-4 py-2 text-sm bg-card text-foreground border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth cursor-default">
                {s}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 border-0 shadow-soft gradient-card">
              <Languages className="w-7 h-7 text-accent mb-3" />
              <h3 className="font-semibold mb-3">Langues</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Arabe — Courant</li>
                <li>Français — Courant</li>
                <li>Anglais — Courant</li>
              </ul>
            </Card>
            <Card className="p-6 border-0 shadow-soft gradient-card">
              <Heart className="w-7 h-7 text-accent mb-3" />
              <h3 className="font-semibold mb-3">Loisirs</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Gaming</li>
                <li>Impression</li>
                <li>Infographie</li>
              </ul>
            </Card>
            <Card className="p-6 border-0 shadow-soft gradient-card">
              <Sparkles className="w-7 h-7 text-accent mb-3" />
              <h3 className="font-semibold mb-3">Qualités</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Créative</li>
                <li>Responsable</li>
                <li>Active</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-3"><Briefcase className="w-3 h-3 mr-1" /> Parcours pro</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Expérience <span className="text-gradient">Professionnelle</span></h2>
          </div>
          <div className="relative space-y-6">
            {experiences.map((exp, i) => (
              <Card key={i} className="p-6 md:p-8 border-0 shadow-soft hover:shadow-elegant transition-smooth gradient-card group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-smooth">{exp.role}</h3>
                    <p className="text-muted-foreground text-sm">{exp.place}</p>
                  </div>
                  <Badge className="gradient-accent border-0 text-white w-fit">{exp.years}</Badge>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATION */}
      <section className="py-20 bg-secondary/40">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-3"><GraduationCap className="w-3 h-3 mr-1" /> Études</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Formation <span className="text-gradient">Académique</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {formations.map((f, i) => (
              <Card key={i} className="p-6 border-0 shadow-soft hover:shadow-elegant transition-smooth gradient-card">
                <Badge className="mb-3 gradient-accent border-0 text-white">{f.years}</Badge>
                <h3 className="font-bold mb-1 leading-snug">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.school}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-20">
        <div className="container max-w-4xl">
          <Card className="p-10 md:p-16 gradient-hero text-primary-foreground border-0 shadow-elegant text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 gradient-accent rounded-full blur-3xl opacity-30" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Travaillons <span className="text-gradient">ensemble</span></h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Un projet, une idée, une opportunité ? N'hésitez pas à me contacter sur la plateforme de votre choix.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="gradient-accent border-0 hover:opacity-90 shadow-glow">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/30 text-white hover:bg-white/15">
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/30 text-white hover:bg-white/15">
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" /> Instagram
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/5 border-white/30 text-white hover:bg-white/15">
                  <a href={EMAIL}>
                    <Mail className="w-4 h-4 mr-2" /> Email
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Dounia Sakkak. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth"><MessageCircle className="w-5 h-5" /></a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth"><Linkedin className="w-5 h-5" /></a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth"><Instagram className="w-5 h-5" /></a>
            <a href={EMAIL} className="hover:text-accent transition-smooth"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-accent shadow-glow flex items-center justify-center text-white hover:scale-110 transition-smooth"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
