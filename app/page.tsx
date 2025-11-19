import HeroSection from './components/HeroSection'
import Starfield from './components/Starfield'
import ColorTransition from './components/ColorTransition'

export default function Home() {
  return (
    <>
      <Starfield />
      <main className="relative">
        {/* HERO - Pure Black */}
        <section id="hero" className="min-h-screen bg-black-pure relative overflow-hidden section-transition">
          <HeroSection />
        </section>

        {/* FREE RESOURCES - Dark Purple */}
        <section id="resources" className="min-h-screen bg-[#1a0a2e] section-transition py-20 px-4">
          <ColorTransition targetColor="#1a0a2e" />
          <div className="max-w-6xl mx-auto">
            <h2 className="text-gold-primary text-center mb-12">Free Sovereignty Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-panel rounded-2xl p-6 box-light">
                <h3 className="gradient-text-purple-gold">Identity Clarity Workbook</h3>
                <p>47-page strategic framework to define your sovereign self</p>
                <a className="gumroad-button" href="https://gumroad.com/l/your-free-resource">
                  Download Free
                </a>
              </div>
              <div className="box-dark rounded-2xl p-6">
                <h3 className="gradient-text-blue-gold">AI Boundary Builder</h3>
                <p>Free assessment tool for personal boundary engineering</p>
                <button className="w-full mt-4 bg-blue-primary text-white py-2 rounded-lg hover:bg-blue-500 transition">
                  Access Tool
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Add the rest of Kimi's sections here... */}
      </main>
    </>
  )
}
