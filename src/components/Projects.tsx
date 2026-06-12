import { motion } from 'motion/react';
import { ExternalLink, Github, Database, Brain, Code, BarChart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Bug-Bounty-Agents",
    description: "A curated arsenal of specialized AI agent prompts for bug bounty hunting, penetration testing, and red-teaming workflows.",
    tags: ["Markdown", "Prompts", "Security"],
    icon: <Brain className="w-5 h-5" />,
    link: "https://github.com/Obila34/bug-bounty-agents",
    size: "large"
  },
  {
    title: "MeshFix",
    description: "Cost-aware observability for AI agents with structured trace ingestion, budget guards, causal graphs, and a Next.js dashboard.",
    tags: ["Python", "Next.js", "FastAPI"],
    icon: <Brain className="w-5 h-5" />,
    link: "https://github.com/Obila34/MeshFix",
    size: "medium"
  },
  {
    title: "SolAgent",
    description: "A mobile AI agent for Solana that handles balances, swaps, voice input, and transaction previews before approval.",
    tags: ["TypeScript", "React Native", "Solana"],
    icon: <BarChart className="w-5 h-5" />,
    link: "https://github.com/Obila34/SolAgent",
    size: "small"
  },
  {
    title: "TelcoTroubleshootingAgenticChallenge",
    description: "An agentic telco troubleshooting challenge built around Python workflows, evaluation, and submission tooling.",
    tags: ["Python", "Agents", "Evaluation"],
    icon: <Database className="w-5 h-5" />,
    link: "https://github.com/Obila34/TelcoTroubleshootingAgenticChallenge",
    size: "small"
  },
  {
    title: "SentinelAI",
    description: "An autonomous SOC analyst that detects, investigates, decides, and reports over Elasticsearch security logs.",
    tags: ["Python", "React", "MCP"],
    icon: <Brain className="w-5 h-5" />,
    link: "https://github.com/Obila34/SentinelAI",
    size: "medium"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A curated selection of my work in AI, Data Science, and Software Engineering.
            </p>
          </div>
          <a href="https://github.com/Obila34" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors">
            View All on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative ${
                  project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  project.size === 'medium' ? 'md:col-span-1 md:row-span-2' : 
                  'md:col-span-1 md:row-span-1'
                }`}
              >
                <Card className="h-full glass border-white/5 hover:border-accent/50 transition-all duration-500 overflow-hidden flex flex-col">
                  <CardHeader className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      {project.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-[#58a6ff]" style={{ transition: 'color 0.25s ease' }}>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 flex-grow">
                    <p className="text-muted-foreground/90 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="relative z-10 flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/10 text-white text-[10px] uppercase tracking-wider font-mono border-white/10">
                        {tag}
                      </Badge>
                    ))}
                    <span className="absolute bottom-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Github className="w-5 h-5" />
                    </span>
                  </CardFooter>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Card>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
