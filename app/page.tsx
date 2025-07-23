"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  Server,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const sections = [
    { id: "hero", label: "Главная" },
    { id: "about", label: "О себе" },
    { id: "experience", label: "Опыт" },
    { id: "skills", label: "Навыки" },
    { id: "contact", label: "Контакты" },
  ]

  const skills = [
    {
      category: "Frontend",
      items: ["Vue.js", "Nuxt.js", "TypeScript", "React", "SCSS"],
      icon: <Smartphone className="w-5 h-5" />,
    },
    { category: "Backend", items: ["Python", "FastAPI", "Flask", "REST API"], icon: <Server className="w-5 h-5" /> },
    { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"], icon: <Database className="w-5 h-5" /> },
    { category: "DevOps", items: ["Docker", "Nginx", "Linux", "CI/CD"], icon: <Code className="w-5 h-5" /> },
  ]

  const experience = [
    {
      company: "Грин Гоу Систем",
      position: "Frontend-разработчик",
      period: "Февраль 2024 — настоящее время",
      duration: "1 год 6 мес.",
      description: [
        "Реализация и поддержка SPA с HTML, CSS/SCSS, JavaScript, TypeScript",
        "Интерфейсы на Vue.js, Nuxt.js; настройка линтеров и препроцессоров",
        "Оптимизация производительности, кроссбраузерная и адаптивная верстка",
      ],
    },
    {
      company: "Фриланс / ИП",
      position: "Full-stack программист-разработчик",
      period: "Ноябрь 2021 — настоящее время",
      duration: "3 года 9 мес.",
      description: [
        "Верстка и сборка интерфейсов на Vue.js / Nuxt.js, TypeScript, SCSS",
        "Серверная часть на Python: REST API, микросервисы",
        "Контейнеризация: Docker, Docker-Compose; настройка Nginx",
      ],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div className="font-bold text-xl" whileHover={{ scale: 1.05 }}>
              СП
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section.id ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.95 }}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-2 space-y-1">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === section.id ? "text-black bg-gray-50" : "text-gray-600"
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {section.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div style={{ opacity, scale }} className="space-y-8">
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Семён
              <motion.span
                className="block font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Петров
              </motion.span>
            </motion.h1>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl sm:text-2xl text-gray-600 font-light">Frontend-разработчик</p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Воронеж</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>25 лет</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="https://github.com/fulliam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://t.me/fulliam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-6">О себе</h2>
            <div className="w-20 h-px bg-gray-300 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Frontend-разработчик с опытом работы более 3 лет. Специализируюсь на создании современных веб-приложений
                с использованием Vue.js, Nuxt.js и TypeScript.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Имею опыт full-stack разработки, работаю с Python, базами данных и DevOps инструментами. Готов к старту
                через 2 недели.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Опыт работы</span>
                <span className="text-sm font-bold">3 года 9 месяцев</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Образование</span>
                <span className="text-sm font-bold">IT (Нетология)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Английский</span>
                <span className="text-sm font-bold">B2</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-6">Опыт работы</h2>
            <div className="w-20 h-px bg-gray-300 mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{job.company}</h3>
                    <p className="text-gray-600">{job.position}</p>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 sm:mt-0 sm:text-right">
                    <p>{job.period}</p>
                    <p className="font-medium">{job.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-600 flex items-start"
                    >
                      <span className="w-2 h-2 bg-gray-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-6">Навыки</h2>
            <div className="w-20 h-px bg-gray-300 mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {skillGroup.icon}
                </motion.div>
                <h3 className="text-lg font-semibold mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light mb-6">Контакты</h2>
            <div className="w-20 h-px bg-gray-300 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8"
          >
            <motion.a
              href="tel:+79003067216"
              className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Телефон</p>
                <p className="text-gray-600">+7 (900) 306-72-16</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:fordevjob@gmail.com"
              className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">fordevjob@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/fulliam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <p className="text-gray-600">github.com/fulliam</p>
              </div>
            </motion.a>

            <motion.a
              href="https://t.me/fulliam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Telegram</p>
                <p className="text-gray-600">@fulliam</p>
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Готов к старту через 2 недели</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800"
                onClick={() => window.open("https://t.me/fulliam", "_blank")}
              >
                Связаться со мной
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © 2025 Семён Петров. Все права защищены.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
