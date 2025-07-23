import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Семён Петров — Резюме Frontend/Fullstack разработчика',
    template: '%s | Семён Петров'
  },
  description: 'Резюме Семёна Петрова — Frontend/Fullstack разработчик с 3+ годами опыта. Vue.js, Nuxt.js, React, TypeScript, Python, Docker, CI/CD, адаптивная и кроссбраузерная верстка.',
  keywords: [
    'Семён Петров',
    'Frontend разработчик',
    'Fullstack разработчик',
    'Vue.js',
    'Nuxt.js',
    'React',
    'TypeScript',
    'Python',
    'Docker'
  ],
  authors: [
    { name: 'Петров Семён', url: 'https://github.com/fulliam' }
  ],
  creator: 'Семён Петров',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Резюме Семёна Петрова — Frontend/Fullstack разработчик',
    description: 'Опыт разработки SPA на Vue.js, Nuxt.js и React; серверная часть на Python; контейнеризация с Docker; CI/CD и тестирование.',
    url: 'https://fulliam.github.io/default_resume/',
    siteName: 'Семён Петров',
    locale: 'ru_RU',
    type: 'website',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Резюме Семёна Петрова',
  //   description: 'Frontend/Fullstack разработчик: Vue.js, React, TypeScript, Python, Docker.',
  //   creator: '@fulliam',
  //   images: ['https://petrov-resume.example.com/twitter-card.png'],
  // },
  icons: {
    icon: [
      { url: '/placeholder-user.jpg', sizes: '16x16', type: 'image/png' },
      { url: '/placeholder-logo.jpg', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
