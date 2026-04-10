import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, Play, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [progress, setProgress] = useState(0);

  const fullLines = [
    "Initializing connection to SAM_ALLELA_CORE...",
    "Fetching external profile data from Vercel edge...",
    "Decrypting skill matrix [Python, ML, AI, FullStack]...",
    "Retrieving certification records [DataCamp Associate]...",
    "Establishing secure handshake with GitHub API...",
    "Ready for deep dive execution."
  ];

  useEffect(() => {
    if (isExecuting) {
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < fullLines.length) {
          setLines(prev => [...prev, fullLines[currentLine]]);
          currentLine++;
          setProgress((currentLine / fullLines.length) * 100);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            window.open("https://sam-obila-allela.vercel.app/", "_blank");
            setIsExecuting(false);
          }, 1000);
        }
      }, 600);
      return () => clearInterval(interval);
    }
  }, [isExecuting]);

  return (
    <section id="deep-dive" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Digital <span className="text-gradient">Footprint</span></h2>
          <p className="text-muted-foreground text-lg">Execute a comprehensive fetch of my external profile and detailed project archives.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-darker rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-bottom border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              <TerminalIcon className="w-3 h-3" />
              bash — sam_allela — 80x24
            </div>
            <div className="w-12" />
          </div>

          <div className="p-6 font-mono text-sm min-h-[300px] flex flex-col">
            <div className="flex-grow">
              <div className="flex items-center gap-2 text-green-500 mb-4">
                <ChevronRight className="w-4 h-4" />
                <span>./execute_external_fetch.sh --verbose</span>
              </div>
              
              {lines.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-2 text-white/80"
                >
                  <span className="text-accent mr-2">[*]</span>
                  {line}
                </motion.div>
              ))}

              {isExecuting && (
                <div className="mt-4">
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              {!isExecuting && lines.length === 0 ? (
                <Button 
                  onClick={() => setIsExecuting(true)}
                  className="bg-accent text-white hover:bg-accent/80 rounded-full px-8 group"
                >
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Execute External Fetch
                </Button>
              ) : isExecuting ? (
                <div className="flex items-center gap-3 text-accent font-mono text-xs uppercase tracking-widest animate-pulse">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Redirecting to Core Profile...
                </div>
              ) : (
                <Button 
                  variant="outline"
                  onClick={() => { setLines([]); setProgress(0); }}
                  className="border-white/10 hover:bg-white/5 rounded-full px-8"
                >
                  Reset Terminal
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
