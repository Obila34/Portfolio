import { motion } from 'motion/react';
import { ArrowRight, Cpu, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <section id="home" className="relative min-height-[100vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <Badge variant="outline" className="bg-accent/10 border-accent/20 text-accent px-4 py-1 rounded-full flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for AI Engineering Projects
          </Badge>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 max-w-5xl mx-auto"
        >
          Engineering the <br />
          <span className="text-gradient">Intelligence</span> of Tomorrow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
        >
          Sam Obila Allela — Data Scientist & AI Engineer specializing in 
          <span className="text-white"> Generative AI and NLP</span>. 
          Building production-ready intelligent systems at the intersection of Math and Computer Science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90 transition-all group">
            Explore Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            View Stack
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:bg-white/5 transition-all flex items-center gap-2" asChild>
            <a href="/resume.pdf" download="Allela_Resume.pdf">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
