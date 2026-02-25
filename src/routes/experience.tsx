import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { experiences } from '@/constants/datas'

export const Route = createFileRoute('/experience')({
  component: Experience,
})

function Experience() {
  return (
    <div className="container py-12">
      <SectionHeader
        title="Experience"
        subtitle="My professional journey."
        delay={0}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        {experiences.map((job, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            key={index}
            className="pb-8 border-l-2 border-light-blue/50 dark:border-gray-800/50 pl-6 relative last:pb-0"
          >
            <a href={job.link} target="_blank">
              <span className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-muted-sky" />

              <div className="mb-1 text-sm font-medium text-muted-sky">
                {job.period}
              </div>
              <h3 className="text-xl font-bold dark:text-gray-100">
                {job.role}
              </h3>
              <div className="text-lg font-medium text-neutral-gray/70 dark:text-gray-400 mb-2">
                {job.company}
              </div>
              <p className="text-neutral-gray/80 dark:text-gray-300 leading-relaxed max-w-2xl">
                {job.description}
              </p>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
