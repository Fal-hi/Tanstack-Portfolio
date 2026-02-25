import { parse } from 'yaml'
import { Github, Instagram, Linkedin } from 'lucide-react'
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
} from './images'
import type { Experience, Project, SocialLink } from '@/types/projects'
import datasYaml from '@/data/yaml/datas.yaml?raw'

const iconMap: Record<string, unknown> = {
  Github,
  Linkedin,
  Instagram,
}

const imageMap: Record<string, unknown> = {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
}

const data = parse(datasYaml)

export const experiences: Array<Experience> = data.experiences

export const projects: Array<Project> = data.projects.map(
  (project: { image: string }) => ({
    ...project,
    image: imageMap[project.image],
  }),
)

export const socialLinks: Array<SocialLink> = data.socialLinks.map(
  (social: { icon: string }) => ({
    ...social,
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    icon: iconMap[social.icon] as unknown as () => React.JSX.Element,
  }),
)
