import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

import ClickSpark from '@/components/ClickSpark'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Syaifal Illahi | Frontend Engineer Portfolio',
      },
      {
        name: 'description',
        content:
          'Frontend Engineer specializing in React, Next.js, TypeScript, and modern web technologies. Building accessible, pixel-perfect, and performant web experiences.',
      },
      {
        name: 'keywords',
        content:
          'Frontend Engineer, Web Engineer, React, Next.js, TypeScript, portfolio, web development, UI/UX',
      },
      {
        name: 'author',
        content: 'Syaifal Illahi',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:title',
        content: 'Syaifal Illahi | Frontend Engineer Portfolio',
      },
      {
        property: 'og:description',
        content:
          'Frontend Engineer specializing in React, Next.js, TypeScript, and modern web technologies.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://syaifal-illahi.vercel.app',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Syaifal Illahi | Frontend Engineer Portfolio',
      },
      {
        name: 'twitter:description',
        content:
          'Frontend Engineer specializing in React, Next.js, TypeScript, and modern web technologies.',
      },
      {
        name: 'twitter:creator',
        content: '@Fal_hi',
      },
      {
        name: 'theme-color',
        content: '#6B9CFF',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://syaifal-illahi.vercel.app',
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ThemeProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-screen overflow-hidden"
    >
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col h-screen font-sans antialiased bg-sky-white dark:bg-gray-950 text-neutral-gray dark:text-gray-100 selection:bg-muted-sky/30 transition-colors duration-300 overflow-hidden">
        <ClickSpark
          sparkColor="#6B9CFF"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        />
        <Navbar />
        <main className="flex-1 w-full pt-16 overflow-hidden">
          <div className="h-full overflow-y-auto">{children}</div>
        </main>
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
