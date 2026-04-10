/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Background from './components/Background';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brain from './components/Brain';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Terminal from './components/Terminal';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen font-sans selection:bg-accent selection:text-white">
        <div className="scan-line" />
        <Background />
        <Navbar />
        
        <main>
          <Hero />
          <Brain />
          <Projects />
          <Certifications />
          <Terminal />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

