export function Footer() {
  return (
    <footer className="w-full py-6 mt-auto text-center border-t border-light-blue/50 dark:border-gray-800/50 bg-sky-white/30 dark:bg-gray-950/30 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto">
        <p className="text-sm text-neutral-gray/60 dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/Fal-hi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-muted-sky transition-colors"
          >
            Syaifal Illahi
          </a>
          . built with{' '}
          <a
            href="https://tanstack.com/start/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-muted-sky transition-colors"
          >
            Tanstack Start
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
