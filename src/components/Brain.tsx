import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';

function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 50;
  
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 4;
      p[i * 3 + 1] = (Math.random() - 0.5) * 4;
      p[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return p;
  }, []);

  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 1.5) {
          l.push([
            [positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]],
            [positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]]
          ]);
        }
      }
    }
    return l;
  }, [positions]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.002;
    pointsRef.current.rotation.z += 0.001;
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line as [number, number, number][]}
          color="#3b82f6"
          lineWidth={0.5}
          transparent
          opacity={0.2}
        />
      ))}
    </group>
  );
}

export default function Brain() {
  return (
    <section id="neural" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            The Neural <br />
            <span className="text-accent">Architecture</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl">
            Building systems that mimic cognitive processes. I specialize in 
            <span className="text-white"> Generative AI and Natural Language Processing (NLP)</span>. 
            From RAG pipelines to fine-tuned LLMs, I architect solutions that bridge the gap between 
            raw data and actionable intelligence.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-12">
            {[
              { label: 'Generative AI', value: 'LLM / Diffusion' },
              { label: 'NLP', value: 'Transformers / BERT' },
              { label: 'Vector DBs', value: 'Pinecone / Chroma' },
              { label: 'ML Ops', value: 'Production Pipelines' },
            ].map((stat, i) => (
              <div key={i} className="glass p-4 rounded-2xl">
                <div className="text-xs font-mono text-accent uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="font-medium text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-tight flex items-center gap-2">
              <span className="w-8 h-[1px] bg-accent"></span>
              Core AI Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", 
                "Seaborn", "LangChain", "RAG Pipelines", "Vector Search",
                "Prompt Engineering", "Fine-tuning", "Model Evaluation"
              ].map((skill) => (
                <span key={skill} className="px-4 py-1.5 rounded-full glass text-xs font-semibold text-white border-white/20 hover:border-accent/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[400px] md:h-[600px] relative"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <NeuralNetwork />
          </Canvas>
          <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent to-black/20" />
        </motion.div>
      </div>
    </section>
  );
}
