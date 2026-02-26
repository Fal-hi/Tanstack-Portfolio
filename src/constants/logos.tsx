import { parse } from 'yaml'
import StackIcon from 'tech-stack-icons'
import logosYaml from '@/data/yaml/logos.yaml?raw'

const data = parse(logosYaml)

export const techLogos = data.techLogos.map(
  (logo: { name: string; title: string; href: string }) => ({
    node: <StackIcon className="w-8 h-8" name={logo.name} />,
    title: logo.title,
    href: logo.href,
  }),
)
