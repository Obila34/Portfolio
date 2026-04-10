import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-mono text-sm font-bold tracking-tighter">SAM_ALLELA.EXE</div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            Nairobi, Kenya
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Obila34" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/sam-allela/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:obilasam3@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          © 2026 Designed for the Intelligence of Tomorrow
        </div>
      </div>
    </footer>
  );
}
