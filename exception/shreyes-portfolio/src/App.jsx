import React, { useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mail, Download, ExternalLink, Code2, Server, BrainCircuit, Rocket, Database, ShieldCheck, Zap, Cpu, Cloud, Layers3, Activity, Sparkles, TerminalSquare, WalletCards } from 'lucide-react'

const EXPERIENCE_START_DATE = new Date('2021-11-01T00:00:00')
const CASHFLOW_ATLAS_URL = 'https://github.com/shreyesmohan-ui/Cashflow-Atlas'

function getExperienceYears(startDate = EXPERIENCE_START_DATE) {
  const now = new Date()
  const diffMs = now.getTime() - startDate.getTime()
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.2425)
  return Math.max(years, 0).toFixed(1)
}

const profile = {
  name: 'Shreyes Mohanya',
  title: 'Software Engineer',
  pitch: 'Backend-first engineer building scalable APIs, microservices, full-stack products, and AI-enabled developer workflows.',
  email: 'shreyesmohan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shreyesmohanya',
  github: 'https://github.com/shreyesmohan-ui',
  resume: '#',
}

const techStack = ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'React', 'Python', 'FastAPI', 'SQL', 'Docker', 'Kubernetes', 'AWS', 'Redis', 'Kafka', 'RabbitMQ', 'JMeter', 'CI/CD', 'OpenAI API', 'MCP Server', 'RAG']

const projects = [
  {
    icon: WalletCards,
    title: 'Cashflow Atlas',
    tag: 'Finance Dashboard',
    description: 'A personal finance intelligence project designed to map cashflow, spending patterns, savings direction, and decision insights through a clean dashboard experience.',
    stack: ['React', 'Dashboard UI', 'Finance Analytics', 'Charts', 'Clean Architecture'],
    link: CASHFLOW_ATLAS_URL,
    featured: true,
  },
  {
    icon: BrainCircuit,
    title: 'AI-Enhanced Job Application Platform',
    tag: 'Microservices + GenAI',
    description: 'Candidate matching, resume analysis, recruiter insights, event-driven services, observability, and AI orchestration for a production-style hiring platform.',
    stack: ['Spring Boot', 'RabbitMQ', 'Docker', 'Kubernetes', 'AWS', 'OpenAI API', 'Vector Search'],
    link: '#',
    featured: true,
  },
  {
    icon: Rocket,
    title: 'Scalable E-commerce Platform',
    tag: 'Full Stack + Cloud',
    description: 'Authentication, product catalog, cart, orders, API persistence, caching, Dockerized services, and cloud deployment.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Netlify', 'Render'],
    link: '#',
  },
  {
    icon: Activity,
    title: 'Backend Performance Optimization',
    tag: 'Performance Engineering',
    description: 'API latency improvements through profiling, caching, query tuning, JMeter analysis, CI validation, and release-focused engineering.',
    stack: ['Java', 'Spring Boot', 'JMeter', 'SQL', 'Caching', 'TeamCity'],
    link: '#',
  },
  {
    icon: ShieldCheck,
    title: 'FHIR REST API Platform',
    tag: 'Domain Edge',
    description: 'HL7 FHIR-based REST APIs built with Python/FastAPI for standardized clinical data exchange between systems.',
    stack: ['FastAPI', 'HL7 FHIR', 'REST APIs', 'Healthcare Integration'],
    link: '#',
  },
]

const highlights = [
  { value: '30%+', label: 'API performance improvement', sub: 'through tuning + caching' },
  { value: '30%', label: 'manual testing effort reduced', sub: 'via automation discipline' },
  { value: '15d', label: 'release cycle acceleration', sub: 'CI/CD + validation focus' },
  { value: '99.9%', label: 'availability mindset', sub: 'production-first delivery' },
]

const pillars = [
  { icon: Server, title: 'Backend Systems', text: 'Java, Spring Boot, REST APIs, microservices, caching, databases, and production debugging.' },
  { icon: Code2, title: 'Full-Stack Delivery', text: 'React, FastAPI, cloud deployments, clean UI flows, and complete product thinking.' },
  { icon: BrainCircuit, title: 'AI Engineering', text: 'MCP Server, OpenAI API, RAG concepts, vector search, and automation workflows.' },
  { icon: Cloud, title: 'DevOps Mindset', text: 'Docker, Kubernetes, TeamCity, Azure DevOps, CI/CD, testing, and release quality.' },
]

function MagneticGrid() {
  return <div className="magnetic-grid" aria-hidden="true" />
}

function FloatingOrb() {
  return (
    <div className="orb-stage" aria-hidden="true">
      <motion.div className="orb" animate={{ rotateX: [0, 360], rotateY: [0, 360] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
        {Array.from({ length: 9 }).map((_, i) => <span key={i} style={{ transform: `rotateY(${i * 40}deg) translateZ(120px)` }} />)}
      </motion.div>
      <div className="orb-core"><Cpu size={54} /></div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
    </div>
  )
}

function Badge({ children }) {
  return <span className="badge">{children}</span>
}

function Section({ eyebrow, title, children }) {
  return (
    <section className="section">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </motion.div>
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
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <MagneticGrid />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      <nav className="nav">
        <a className="brand" href="#top"><span>&lt;/&gt;</span>{profile.name}</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href={profile.resume}><Download size={16} /> Resume</a>
      </nav>

      <header id="top" className="hero section">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-kicker">
            <Sparkles size={16} /> Available for high-impact software roles
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>
            I build <span>scalable backend systems</span>, sharp full-stack products, and AI-powered engineering workflows.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2 }}>
            {profile.title} with <strong>{experienceYears}+ years</strong> of production experience across Java, Spring Boot, APIs, microservices, performance engineering, cloud delivery, and modern AI automation.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.3 }} className="hero-actions">
            <a className="primary-btn" href="#projects">Explore Work <ArrowRight size={18} /></a>
            <a className="secondary-btn" href={`mailto:${profile.email}`}>Contact Me <Mail size={18} /></a>
          </motion.div>
          <div className="social-row">
            <a href={profile.github} aria-label="GitHub"><Code2 size={20} /></a>
            <a href={profile.linkedin} aria-label="LinkedIn"><ExternalLink size={20} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="hero-visual">
          <FloatingOrb />
          <div className="visual-card top-card"><TerminalSquare size={20} /><span>Production APIs</span></div>
          <div className="visual-card mid-card"><Zap size={20} /><span>{activeSkill}</span></div>
          <div className="visual-card low-card"><Layers3 size={20} /><span>System Design</span></div>
        </motion.div>
      </header>

      <section className="metrics section compact">
        {highlights.map((item, index) => (
          <motion.div key={item.label} className="metric-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <p>{item.value}</p><h3>{item.label}</h3><span>{item.sub}</span>
          </motion.div>
        ))}
      </section>

      <Section eyebrow="Engineering DNA" title="Strong generic software development profile — with modern AI leverage.">
        <div className="pillar-grid">
          {pillars.map((item, index) => (
            <motion.article key={item.title} className="glass-card tilt-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <item.icon className="card-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Experience" title="Production experience with measurable delivery outcomes.">
        <div id="work" className="experience-card glass-card">
          <div>
            <p className="role">Software Engineer</p>
            <h3>Varian Medical Systems</h3>
            <span>Nov 2021 — Present • {experienceYears}+ years • Pune, India</span>
          </div>
          <ul>
            <li>Build scalable backend applications using Java, Spring Boot, Hibernate, REST APIs, and relational databases.</li>
            <li>Improve performance with query tuning, caching, profiling, JMeter testing, and release validation.</li>
            <li>Contribute across microservices, APIs, databases, CI/CD, automated testing, and production-quality engineering.</li>
            <li>Use AI-assisted automation and MCP Server concepts to reduce repetitive development and operational work.</li>
            <li>Collaborate with cross-functional teams, mentor juniors, review code, and communicate delivery impact clearly.</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Featured Projects" title="Built to show real engineering range, not just UI screenshots.">
        <div id="projects" className="project-grid">
          {projects.map((project, index) => (
            <motion.article key={project.title} className={`project-card glass-card ${project.featured ? 'featured-project' : ''}`} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <div className="project-head">
                <div className="project-icon"><project.icon size={26} /></div>
                <a href={project.link} target={project.link === '#' ? undefined : '_blank'} rel="noreferrer" aria-label={project.title}><ExternalLink size={18} /></a>
              </div>
              <Badge>{project.tag}</Badge>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack-row">{project.stack.map((s) => <span key={s}>{s}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills" title="A stack that covers development, delivery, performance, and AI.">
        <div id="skills" className="skill-cloud glass-card">
          {techStack.map((skill) => <span key={skill} className={skill === activeSkill ? 'active-skill' : ''}>{skill}</span>)}
        </div>
      </Section>

      <section id="contact" className="section contact glass-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let’s build something reliable, fast, and useful.</h2>
          <p>Open to backend, full-stack, platform, cloud, AI engineering, and high-impact product roles.</p>
        </div>
        <div className="contact-actions">
          <a className="primary-btn" href={`mailto:${profile.email}`}>Email Me <Mail size={18} /></a>
          <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={18} /></a>
          <a className="secondary-btn" href={CASHFLOW_ATLAS_URL} target="_blank" rel="noreferrer">Cashflow Atlas <Code2 size={18} /></a>
        </div>
      </section>
    </main>
  )
}
