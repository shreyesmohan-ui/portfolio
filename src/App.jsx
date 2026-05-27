import React, { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Mail,
  Download,
  Cpu,
  Server,
  Brain,
  ShieldCheck,
  Database,
  Cloud,
  Workflow,
  ExternalLink,
  Code2,
  Gauge,
  Boxes,
  TestTube2,
  TerminalSquare,
  Zap,
  Layers3,
} from 'lucide-react'

const EXPERIENCE_START_DATE = new Date('2021-11-01T00:00:00')
const CASHFLOW_ATLAS_URL = 'https://github.com/shreyesmohan-ui/Cashflow-Atlas'
const techStack = ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'ReactJS', 'Python', 'FastAPI', 'Docker', 'Kubernetes', 'AWS', 'Redis', 'RabbitMQ', 'JMeter', 'CI/CD', 'OpenAI API', 'MCP Server', 'RAG']

function getExperienceYears(startDate = EXPERIENCE_START_DATE) {
  const now = new Date()
  const diffMs = now.getTime() - startDate.getTime()
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.2425)
  return Math.max(years, 0).toFixed(1)
}

const experienceYears = getExperienceYears()

const profile = {
  name: 'Shreyes Mohanya',
  role: 'Software Engineer | Backend, Full-Stack & AI-Enabled Systems',
  email: 'shreyesmohan@gmail.com',
  phone: '+91 7828996337',
  location: 'Pune, India',
  linkedin: 'https://www.linkedin.com/in/shreyesmohanya',
  github: 'https://github.com/shreyesmohan-ui',
  resume: 'https://docs.google.com/document/d/1-kHt4Ox7tEtGUhbua84OsWqcNZpEXMVq/edit?usp=drive_link&ouid=102690758665265746395&rtpof=true&sd=true',
}

const skills = [
  'Java', 'Spring Boot', 'Hibernate', 'Microservices', 'REST APIs', 'System Design',
  'JavaScript', 'ReactJS', 'Python', 'FastAPI', 'MySQL', 'SQL Server', 'PostgreSQL',
  'Redis', 'Docker', 'Kubernetes', 'AWS', 'RabbitMQ', 'Kafka', 'JMeter', 'TeamCity',
  'Azure DevOps', 'CI/CD', 'Postman', 'PowerShell', 'OpenAI API', 'MCP Server',
  'Vector Search', 'RAG', 'HL7 FHIR'
]

const metrics = [
  { value: `${experienceYears}+`, label: 'Years Building Production Software' },
  { value: '30%', label: 'Faster API Response Times' },
  { value: '30%', label: 'Reduction in Manual Testing Effort' },
  { value: '15 Days', label: 'Faster Release Cycles' },
  { value: '99.9%', label: 'High-Availability Engineering Focus' },
  { value: '20%', label: 'Scalability & Team Productivity Gains' },
]

const projects = [
  {
    title: 'Cashflow Atlas',
    tag: 'Finance Dashboard',
    description: 'A personal finance intelligence project that maps spending patterns, savings direction, and decision insights through a clean dashboard experience.',
    stack: ['React', 'Dashboard UI', 'Finance Analytics', 'Charts', 'Clean Architecture'],
    impact: 'Adds a real product-style showcase beyond generic portfolio cards.',
    link: CASHFLOW_ATLAS_URL,
  },
  {
    title: 'AI-Enhanced Job Application Platform',
    tag: 'Microservices + GenAI',
    description: 'A production-style job application platform with candidate matching, resume analysis, recruiter insights, event-driven communication, observability, and AI orchestration.',
    stack: ['Spring Boot', 'Microservices', 'RabbitMQ', 'Docker', 'Kubernetes', 'AWS', 'OpenAI API', 'MCP', 'Vector Search'],
    impact: 'Positions AI as a real engineering layer, not just a chatbot wrapper.',
    link: '#',
  },
  {
    title: 'Scalable E-commerce Platform',
    tag: 'Full Stack + Cloud',
    description: 'A full-stack commerce system with authentication, product catalog, cart, order management, API persistence, caching, Dockerized services, and cloud deployment.',
    stack: ['FastAPI', 'ReactJS', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Render', 'Netlify'],
    impact: 'Demonstrates end-to-end delivery from database and APIs to frontend and deployment.',
    link: '#',
  },
  {
    title: 'Backend Performance Optimization Work',
    tag: 'Performance Engineering',
    description: 'Optimized backend APIs through query tuning, caching, performance assessments, JMeter testing, CI validation, and release-focused engineering discipline.',
    stack: ['Java', 'Spring Boot', 'JMeter', 'SQL', 'Caching', 'TeamCity', 'Azure DevOps'],
    impact: 'Improved API response times by 30% and helped improve system efficiency.',
    link: '#',
  },
  {
    title: 'FHIR-Based REST API Platform',
    tag: 'Domain Differentiator',
    description: 'Built HL7 FHIR-based REST APIs using Python and FastAPI for standardized data exchange between clinical systems.',
    stack: ['Python', 'FastAPI', 'HL7 FHIR', 'REST APIs', 'Healthcare Integration'],
    impact: 'Adds a rare domain edge while keeping the portfolio centered on strong software engineering.',
    link: '#',
  },
]

const experience = [{
  company: 'Varian Medical Systems',
  role: 'Software Engineer',
  period: `Nov 2021 — Present • ${experienceYears}+ years`,
  location: 'Pune, India',
  points: [
    'Build and maintain scalable backend applications using Java, Spring Boot, Hibernate, REST APIs, and relational databases.',
    'Improve API performance using query tuning, caching, profiling, and disciplined performance testing practices.',
    'Contribute to microservices, system integration, CI/CD, automated testing, release validation, and production-quality engineering workflows.',
    'Work across backend, API design, database, DevOps, and quality engineering to deliver reliable software under release timelines.',
    'Use AI-assisted automation and MCP Server concepts to reduce repetitive development, validation, and operational effort.',
    'Collaborate with cross-functional teams, mentor juniors, review code, and translate complex technical work into clear delivery outcomes.',
  ],
}]

const focusAreas = [
  { icon: Code2, title: 'Software Development', text: 'Clean code, reusable components, API design, debugging, testing, and maintainable delivery.' },
  { icon: Server, title: 'Backend Engineering', text: 'Java, Spring Boot, microservices, REST APIs, databases, caching, reliability, and scalability.' },
  { icon: Brain, title: 'AI-Enabled Systems', text: 'MCP Server, OpenAI APIs, RAG concepts, vector search, and automation-oriented workflows.' },
  { icon: Workflow, title: 'DevOps & Delivery', text: 'Docker, Kubernetes, CI/CD, TeamCity, Azure DevOps, release acceleration, and observability.' },
]

const strengths = [
  { icon: Gauge, title: 'Performance Mindset', text: 'API optimization, JMeter-driven analysis, SQL/query tuning, caching, and measurable improvements.' },
  { icon: Boxes, title: 'System Design Thinking', text: 'Microservices, event-driven flows, integration boundaries, fault tolerance, and scalable architecture.' },
  { icon: TestTube2, title: 'Quality Engineering', text: 'Automated testing, regression stability, release validation, CI checks, and production readiness.' },
]

const quickFacts = [
  { label: 'Core specialty', value: 'Backend + API systems' },
  { label: 'Current focus', value: 'AI workflows & cloud delivery' },
  { label: 'Approach', value: 'Reliable, measurable, production-ready' },
]

const capabilities = [
  {
    title: 'Build production-grade backend systems',
    text: 'Java, Spring Boot, REST APIs, microservices, and clean database design that scale under real traffic.',
    bullets: ['API design', 'Caching', 'Performance tuning', 'Reliability'],
  },
  {
    title: 'Ship AI-enabled product workflows',
    text: 'Use MCP, OpenAI APIs, RAG concepts, and automation to make software smarter without losing engineering discipline.',
    bullets: ['AI integrations', 'Vector search', 'Workflow automation', 'Developer tooling'],
  },
  {
    title: 'Deliver full-stack with confidence',
    text: 'Bridge frontend polish, backend logic, deployment, and release quality into one cohesive product experience.',
    bullets: ['React', 'Cloud delivery', 'CI/CD', 'Production support'],
  },
]

const heroHighlights = [
  { icon: TerminalSquare, label: 'Production APIs' },
  { icon: Zap, label: 'AI Automation' },
  { icon: Layers3, label: 'Cloud Native' },
]

function MagneticGrid() {
  return <div className="magnetic-grid" aria-hidden="true" />
}

function FloatingOrb({ activeSkill }) {
  return (
    <div className="orb-stage" aria-hidden="true">
      <motion.div className="orb-chip" animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}>
        {activeSkill}
      </motion.div>
      <motion.div className="orb" animate={{ rotateX: [0, 360], rotateY: [0, 360] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
        {Array.from({ length: 9 }).map((_, i) => <span key={i} style={{ transform: `rotateY(${i * 40}deg) translateZ(120px)` }} />)}
      </motion.div>
      <motion.div className="orb-core" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-100/90">{activeSkill}</p>
          <p className="mt-1 text-[10px] text-cyan-100/70">my favorite kind of magic</p>
        </div>
      </motion.div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
    </div>
  )
}

function Badge({ children }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{children}</span>
}

function Section({ eyebrow, title, children }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default function App() {
  const experienceYears = useMemo(() => getExperienceYears(), [])
  const [activeSkill, setActiveSkill] = useState('Java')
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSkill((current) => techStack[(techStack.indexOf(current) + 1) % techStack.length])
    }, 1100)
    return () => clearInterval(id)
  }, [])

  return (
    <main className="site-shell min-h-screen bg-slate-950 text-slate-200">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <MagneticGrid />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />
      <div className="pointer-events-none fixed left-1/2 top-[45%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-95 md:top-[48%]">
        <FloatingOrb activeSkill={activeSkill} />
      </div>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-lg font-bold text-white">SM<span className="text-cyan-300">.</span></a>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#work" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <header className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge>Backend • Full-Stack • AI Automation • Cloud</Badge>
          <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Building <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">scalable software systems</span> that are fast, reliable, and impossible to ignore.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I’m {profile.name}, a backend-first Software Engineer with {experienceYears}+ years of experience building reliable APIs, full-stack products, and AI-enabled workflows — plus a rare healthcare/HL7 FHIR edge from the Varian ecosystem.
          </p>
          <p className="mt-4 max-w-xl rounded-2xl border border-cyan-400/20 bg-cyan-400/8 p-4 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10">
            I help teams ship faster with measurable impact: cleaner APIs, stronger performance, smoother releases, and automation that actually reduces manual toil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-200">View Projects <ArrowRight size={18} /></a>
            <a href={profile.resume} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">Resume <Download size={18} /></a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
            {quickFacts.map((item) => (
              <span key={item.label} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-sm shadow-slate-950/40">{item.label}: <strong className="text-white">{item.value}</strong></span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="hero-visual-card relative overflow-visible rounded-[2rem] border border-cyan-400/20 bg-white/[0.06] p-6 shadow-[0_30px_80px_rgba(8,15,35,0.65)] backdrop-blur-2xl">
          <div className="hero-sheen pointer-events-none absolute inset-0 rounded-[2rem]" />
          <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative z-10 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-inner shadow-cyan-500/5">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 via-violet-400/20 to-pink-400/20 text-cyan-100 shadow-lg shadow-cyan-500/10"><Cpu /></div>
              <div><p className="font-bold text-white">Engineering Profile</p><p className="text-sm text-slate-400">Backend-first developer with full-stack and AI automation depth</p></div>
            </div>
            <div className="grid gap-3">
              {focusAreas.map((area) => (
                <div key={area.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.06]">
                  <div className="flex items-start gap-3"><area.icon className="mt-1 text-cyan-300" size={20} /><div><h3 className="font-semibold text-white">{area.title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{area.text}</p></div></div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/8 p-4 text-sm text-cyan-100">
              Best fit for backend, full-stack, platform, and AI-enabled roles where reliability, performance, and clean delivery matter.
            </div>
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/8 p-4 text-sm text-cyan-100 shadow-lg shadow-cyan-500/10">
              Current focus: <span className="font-semibold text-white">{activeSkill}</span> • <span className="text-cyan-50/90">I debug faster than my coffee cools.</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center text-xs text-slate-200 shadow-inner shadow-slate-950/40">
                  <item.icon className="mx-auto mb-2 text-cyan-300" size={16} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </header>

      <section className="relative border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-8 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m) => <div key={m.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-center"><p className="text-3xl font-black text-white">{m.value}</p><p className="mt-2 text-sm text-slate-400">{m.label}</p></div>)}
        </div>
      </section>

      <Section eyebrow="Experience" title="Development experience with measurable engineering impact">
        <div id="work" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          {experience.map((job) => <div key={job.company}><div className="flex flex-col justify-between gap-2 md:flex-row md:items-end"><div><h3 className="text-2xl font-bold text-white">{job.role}</h3><p className="text-cyan-300">{job.company} • {job.location}</p></div><p className="text-sm text-slate-400">{job.period}</p></div><ul className="mt-6 grid gap-3 md:grid-cols-2">{job.points.map((point) => <li key={point} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-6 text-slate-300">{point}</li>)}</ul></div>)}
        </div>
      </Section>

      <Section eyebrow="Projects" title="Project stories that show software development depth">
        <div id="projects" className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article key={project.title} whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.06]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <Badge>{project.tag}</Badge>
                <a href={project.link} target={project.link === '#' ? undefined : '_blank'} rel="noreferrer" aria-label={project.title} className="text-slate-400 transition hover:text-cyan-300"><ExternalLink size={18} /></a>
              </div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
              <p className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm text-cyan-100">{project.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((s) => <Badge key={s}>{s}</Badge>)}</div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What I Bring" title="Practical value, not just buzzwords">
        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="feature-card rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/[0.06]">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Value {index + 1}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">{item.bullets.map((bullet) => <span key={bullet} className="rounded-full border border-cyan-400/20 bg-cyan-400/8 px-3 py-1 text-xs text-cyan-100">{bullet}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills" title="Development stack">
        <div id="skills" className="flex flex-wrap gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">{skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div>
      </Section>

      <Section eyebrow="Why Me" title="WHY ME: Strengths that set me apart">
        <div className="grid gap-5 md:grid-cols-3">
          {strengths.map((item) => <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><item.icon className="text-cyan-300" /><h3 className="mt-4 font-bold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p></div>)}
        </div>
      </Section>

      <Section eyebrow="Differentiator" title="Generic developer strength with a rare domain edge">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"><ShieldCheck className="text-cyan-300" /><h3 className="mt-4 font-bold text-white">Reliable Engineering</h3><p className="mt-2 text-sm leading-6 text-slate-400">I focus on maintainable software, predictable releases, testability, and systems that can survive real usage.</p></div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"><Database className="text-cyan-300" /><h3 className="mt-4 font-bold text-white">Data & API Depth</h3><p className="mt-2 text-sm leading-6 text-slate-400">Strong backend foundation across API design, databases, ORM, integration, performance, and production debugging.</p></div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"><Cloud className="text-cyan-300" /><h3 className="mt-4 font-bold text-white">Future-Ready Stack</h3><p className="mt-2 text-sm leading-6 text-slate-400">Expanding into AI automation, MCP, RAG, cloud-native deployment, and modern developer productivity workflows.</p></div>
          </div>
        </div>
      </Section>

      <footer id="contact" className="relative border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between">
          <div><h2 className="text-2xl font-bold text-white">Let’s build reliable software.</h2><p className="mt-2 text-slate-400">Open to backend, full-stack, platform, cloud, AI engineering, and healthcare technology opportunities.</p></div>
          <div className="flex flex-wrap gap-3"><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"><Mail size={18} /> Email</a><a href={profile.linkedin} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"><ExternalLink size={18} /> LinkedIn</a><a href={profile.github} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"><Code2 size={18} /> GitHub</a></div>
        </div>
      </footer>
    </main>
  )
}
