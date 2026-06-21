export default function Home() {
  // Global links Configuration
  const githubProfileUrl = "https://github.com/agnuschristopher"; 
  const linkedinProfileUrl = "https://www.linkedin.com/in/agnus-christopher-318894327?utm_source=share_via&utm_content=profile&utm_medium=member_android";
  const contactEmail = "agnuschristo0706@gmail.com"; // Replace with your professional email

  // Real projects mapped directly from your GitHub repository list
  const projects = [
    {
      title: "Interactive Sequence Animation Pipeline",
      description: "An optimized client-side environment utilizing advanced event handling to manage high-frequency element updates and fluid render animations, focusing on memory lifecycle tracking and DOM paint efficiency.",
      tags: ["JavaScript", "CSS3 Keyframes", "DOM Manipulation", "UI/UX Optimization"],
      githubUrl: `${githubProfileUrl}/sequence-animation`,
    },
    {
      title: "Deterministic State & Path Engine",
      description: "A multi-conditional game logic state machine application executing tree analysis algorithms to calculate optimal processing paths and handle active state tracking dynamically.",
      tags: ["Data Structures", "Algorithm Design", "State Isolation", "Logic Architecture"],
      githubUrl: `${githubProfileUrl}/tic-tac-toe`,
    },
    {
      title: "Structured Multi-Variant Data Schema Registry",
      description: "A structured data configuration service built to safely parse complex object notation arrays, transforming multi-variant raw data records into highly filterable relational visualization modules.",
      tags: ["JSON", "Data Parsing", "Relational Mapping", "Technical Semantics"],
      githubUrl: `${githubProfileUrl}/structured-planet-data`,
    },
  ];

  // Verified credentials matching your official certificates
  const certifications = [
    {
      title: "AI Cyber Security Certified",
      issuer: "Techmaghi (in assoc. with Elan & nVision, IIT Hyderabad)",
      date: "Jan 2026",
    },
    {
      title: "Full Stack Web Development Certificate",
      issuer: "Agnirva (DPIIT Recognised Startup)",
      date: "June 2025",
    },
    {
      title: "Python Web Development using AI",
      issuer: "Techmaghi (Kerala Innovation Festival / KSUM)",
      date: "July 2025",
    },
    {
      title: "Build Your Own Generative AI Model",
      issuer: "NxtWave",
      date: "June 2025",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "July 2025",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* Navigation Layer */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="font-mono text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            agnus.dev
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition duration-200">About</a>
            <a href="#portfolio" className="hover:text-white transition duration-200">Portfolio</a>
            <a href="#certifications" className="hover:text-white transition duration-200">Certifications</a>
            <div className="hidden sm:block h-4 w-[1px] bg-slate-800"></div>
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:block hover:text-white transition duration-200">GitHub</a>
            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:block hover:text-white transition duration-200">LinkedIn</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto pt-44 pb-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          B.Tech Computer Science & Engineering (AI)
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
          Agnus Christopher
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Engineering scalable web systems while exploring Artificial Intelligence frameworks, structural data systems, and core cybersecurity infrastructure.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a href="#portfolio" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 font-semibold rounded-lg transition duration-200 shadow-lg shadow-blue-600/20">
            Explore Portfolio
          </a>
          <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-900 hover:bg-slate-800 font-semibold rounded-lg border border-slate-800 transition duration-200">
            Connect on LinkedIn
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-24 px-6 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white font-mono">01. ABOUT ME</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-slate-400 leading-relaxed">
            <p>
              I am a **3rd-year B.Tech Computer Science & Engineering** student specializing in **Artificial Intelligence** at **St. Joseph's College of Engineering and Technology, Palai**.
            </p>
            <p>
              Driven by a deep passion to explore technological landscapes, I focus on building real-world projects that sit at the intersection of robust frontend systems, algorithmic logic, and automated workflows. My development workflow standardizes on highly readable codebases and clean architectural foundations.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-teal-400">
              <span>+ React / Next.js</span>
              <span>+ Python (AI / ML Ecosystems)</span>
              <span>+ Tailwind CSS & TypeScript</span>
              <span>+ Data Structures & Algorithms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-5xl mx-auto py-24 px-6 border-t border-slate-900">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white font-mono mb-2">02. PRODUCTION WORK</h2>
          <p className="text-slate-400 text-sm">Active production repositories from my version-control ecosystem.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-900/40 p-6 rounded-xl border border-slate-800/60 hover:border-slate-700/80 transition duration-300 flex flex-col justify-between group">
              <div>
                <h3 className="text-lg font-bold mb-2 text-slate-100 group-hover:text-blue-400 transition duration-200">{project.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono bg-slate-800/70 text-slate-300 px-2 py-0.5 rounded border border-slate-700/20">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-3 border-t border-slate-800/40 text-xs font-mono">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white flex items-center gap-1 transition duration-200">
                    View Repository &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="max-w-5xl mx-auto py-24 px-6 border-t border-slate-900">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white font-mono mb-2">03. CREDENTIALS & SKILLS</h2>
          <p className="text-slate-400 text-sm">Vetted verification courses and technical engineering workshops.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-slate-900/20 border border-slate-800/40 rounded-lg p-5 flex justify-between items-center hover:bg-slate-900/40 hover:border-slate-700/60 transition duration-200">
              <div className="pr-4">
                <h4 className="text-sm font-semibold text-slate-200 mb-1">{cert.title}</h4>
                <p className="text-xs text-slate-500">{cert.issuer}</p>
              </div>
              <span className="text-[11px] font-mono text-slate-500 whitespace-nowrap">{cert.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer System */}
      <footer className="max-w-5xl mx-auto py-12 px-6 border-t border-slate-900 text-center md:flex md:justify-between md:items-center text-xs text-slate-500 font-mono">
        <p>© 2026 Agnus Christopher.</p>
        <div className="flex justify-center gap-6 mt-4 md:mt-0">
          <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">GitHub</a>
          <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">LinkedIn</a>
          <a href={`mailto:${contactEmail}`} className="hover:text-slate-300 transition">Email</a>
        </div>
      </footer>

    </div>
  );
}