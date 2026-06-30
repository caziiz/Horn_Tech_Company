import {
  Award,
  Briefcase,
  Cloud,
  Code2,
  Heart,
  Lightbulb,
  Network,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

const iconMap = {
  code: Code2,
  network: Network,
  shield: Shield,
  briefcase: Briefcase,
  sparkles: Sparkles,
  cloud: Cloud,
  'shield-check': ShieldCheck,
  lightbulb: Lightbulb,
  heart: Heart,
  users: Users,
  award: Award,
}

export function getIcon(name) {
  return iconMap[name] || Code2
}

export default iconMap
