import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <SectionHeader
        title="About Me"
        subtitle="I'm a frontend engineer passionate about building intuitive and delightful user experiences."
        delay={0}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-8 md:grid-cols-[2fr,1fr]"
      >
        <div className="space-y-6 text-lg text-neutral-gray/80 dark:text-gray-300 leading-relaxed">
          <p>
            With over 7 years of experience in web development, I specialize in
            creating responsive and accessible applications using modern
            JavaScript frameworks.
          </p>
          <p>
            I believe in the power of minimalism and clean code. My approach
            blends technical expertise with a keen eye for design, ensuring that
            every product I build not only functions perfectly but also looks
            beautiful.
          </p>
          <p>
            When I'm not coding, you can find me exploring new frameworks,
            reading about design systems, or contributing to open-source
            projects.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
