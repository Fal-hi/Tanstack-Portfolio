/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle, Mail, Send } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { socialLinks } from '@/constants/datas'

const WEB3FORMS_ACCESS_KEY = 'd9b56880-7cb3-4f58-8a08-41faf4515503'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          to: 'syaifal.illahi@gmail.com',
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className="container py-12">
      <SectionHeader
        title="Get in Touch"
        subtitle="Have a project in mind or just want to say hi?"
        delay={0}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto"
      >
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <p className="text-lg text-neutral-gray/80 dark:text-gray-300 leading-relaxed">
            I'm currently open to new opportunities and collaborations. Whether
            you have a question or just want to connect, feel free to reach out.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:syaifal.illahi@gmail.com"
              className="flex items-center gap-3 text-lg font-medium hover:text-muted-sky transition-colors"
            >
              <Mail className="w-5 h-5 text-muted-sky" />{' '}
              syaifal.illahi@gmail.com
            </a>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="p-2 rounded-full bg-light-blue/50 dark:bg-gray-800/50 text-neutral-gray dark:text-gray-300 hover:bg-muted-sky hover:text-white transition-colors"
                >
                  {link.icon && <link.icon />}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-8 bg-white/80 dark:bg-gray-900/80">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">
                  Message Sent!
                </h3>
                <p className="text-neutral-gray dark:text-gray-300 mb-4">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <Button onClick={() => setStatus('idle')}>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium dark:text-gray-200"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-md border border-neutral-gray/20 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-muted-sky/50 focus:border-transparent transition-all dark:text-gray-100"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium dark:text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 rounded-md border border-neutral-gray/20 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-muted-sky/50 focus:border-transparent transition-all dark:text-gray-100"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium dark:text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2 rounded-md border border-neutral-gray/20 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-muted-sky/50 focus:border-transparent transition-all resize-none dark:text-gray-100"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full"
                >
                  {status === 'loading' ? (
                    <>
                      <Send className="w-4 h-4 mr-2 animate-pulse" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
