import { ExternalLink, Github } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { projects } from '@/constants/datas'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="container py-12 no-scrollbar">
      <SectionHeader
        title="Selected Work"
        subtitle="A collection of projects exploring design and technology."
        delay={0}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="h-[30vh]"
          >
            <Card className="relative flex flex-col justify-between h-full overflow-hidden bg-white/60 dark:bg-gray-900/60">
              <div className="absolute inset-0 -z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full opacity-40 blur-[2px]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/60 to-transparent dark:from-gray-900/90 dark:via-gray-900/60" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="mb-4 text-neutral-gray/80 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-neutral-gray/60 dark:text-gray-400 bg-neutral-gray/5 dark:bg-gray-800 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto ml-auto">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-2"
                  disabled={project.github === '#'}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="gap-2"
                  disabled={project.live === '#'}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
