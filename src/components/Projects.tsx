import { motion } from 'motion/react';
import { ExternalLink, Github, Database, Brain, Code, BarChart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Sign Language Detector",
    description: "Built and evaluated a supervised classification model using scikit-learn — covering feature engineering and performance metrics.",
    tags: ["Scikit-Learn", "NumPy", "Python"],
    icon: <Brain className="w-5 h-5" />,
    link: "https://github.com/Obila34/SignLanguageDetector",
    size: "large"
  },
  {
    title: "Study Bot",
    description: "An intelligent study assistant built using Google SDK, designed to help students navigate complex educational materials through AI-driven insights.",
    tags: ["Google SDK", "AI", "Python", "LLM"],
    icon: <Brain className="w-5 h-5" />,
    link: "https://github.com/Obila34/pyforge-labs/tree/main/studybot",
    size: "medium"
  },
  {
    title: "Medical Data Visualizer",
    description: "Interactive visual analysis of a real-world dataset using Seaborn and Matplotlib — uncovering patterns and outliers.",
    tags: ["Seaborn", "Matplotlib", "Pandas"],
    icon: <BarChart className="w-5 h-5" />,
    link: "https://github.com/Obila34/medical_data_visualizer.py",
    size: "small"
  },
  {
    title: "Demographic Data Analyzer",
    description: "End-to-end data analysis pipeline — data cleaning, exploration, and visual insights using Pandas.",
    tags: ["Python", "Pandas", "Matplotlib"],
    icon: <Database className="w-5 h-5" />,
    link: "https://github.com/Obila34/demographic_data_analyzer.py",
    size: "small"
  },
  {
    title: "Sea Level Predictor",
    description: "Trained a regression model to predict continuous outcomes from structured data — includes hyperparameter tuning.",
    tags: ["Scikit-Learn", "NumPy", "Jupyter"],
    icon: <Brain className="w-5 h-5" />,
    link: "https://github.com/Obila34/sea_level_predictor",
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
            <motion.div
              key={i}
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
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute bottom-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </CardFooter>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
