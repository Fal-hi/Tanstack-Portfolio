import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Mail } from 'lucide-react'
import LogoLoop from '@/components/LogoLoop'
import { techLogos } from '@/constants/logos'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] px-4 text-center">
        <div className="space-y-6 max-w-3xl">
          {/* Header Section - Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-light-blue/50 dark:bg-gray-800/50 text-muted-sky"
          >
            Frontend Engineer
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-linear-to-br from-neutral-gray to-neutral-gray/70 dark:from-gray-100 dark:to-gray-400"
          >
            Building digital products with purpose.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-lg text-neutral-gray/70 dark:text-gray-300 leading-relaxed"
          >
            I craft accessible, pixel-perfect, and performant web experiences
            using modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
          >
            <Button asChild size="lg" className="rounded-full">
              <Link to="/projects" className="flex items-center">
                View Work <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-white/50 backdrop-blur-sm border-neutral-gray/10"
            >
              <Link to="/contact" className="flex items-center">
                Get in Touch <Mail className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Tech Stack Logo Loop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Technology partners"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}
