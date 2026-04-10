import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  {
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    date: "2026",
    link: "https://www.udacity.com/certificate/e/96a7a664-2f85-11f1-a4fe-67efa5bd0cc0",
    badgeColor: "from-purple-600 to-indigo-500"
  },
  {
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    date: "2024",
    link: "https://www.datacamp.com/certificate/AEDS0018275429501",
    badgeColor: "from-blue-500 to-cyan-400"
  },
  {
    title: "Python Data Associate",
    issuer: "DataCamp",
    date: "2023",
    link: "https://www.datacamp.com/certificate/PDA0016756121995",
    badgeColor: "from-yellow-500 to-orange-400"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Professional <span className="text-gradient">Certifications</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Validated expertise in AI Engineering and Data Science from industry-leading institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass border-white/5 hover:border-accent/30 transition-all duration-500 group overflow-hidden">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.badgeColor} flex items-center justify-center shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-accent">{cert.issuer}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight mb-2">{cert.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground/90 font-mono">{cert.date}</span>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs font-mono uppercase tracking-widest flex items-center gap-1 hover:text-accent transition-colors"
                      >
                        Verify <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
                
                {/* Decorative background glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${cert.badgeColor} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
