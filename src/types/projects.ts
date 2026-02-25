export interface Experience {
  role: string
  company: string
  period: string
  link: string
  description: string
}

export interface Project {
  title: string
  description: string
  tech: Array<string>
  github: string
  live: string
  image: string
}

export interface SocialLink {
  name: string
  url: string
  icon: () => React.JSX.Element
}
