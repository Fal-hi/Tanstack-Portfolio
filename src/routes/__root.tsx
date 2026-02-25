import {
  HeadContent,
  Scripts,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

import appCss from '../styles.css?url'
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
        title: 'Frontend Developer Portfolio',
      },
    ],
    links: [
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
