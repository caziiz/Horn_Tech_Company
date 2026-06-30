import { Briefcase, Camera, Globe, MessageCircle, Music, Play, Share2 } from 'lucide-react'
import { cn } from '../../utils/cn'

const platformIcons = {
  facebook: Share2,
  linkedin: Briefcase,
  twitter: MessageCircle,
  instagram: Camera,
  youtube: Play,
  tiktok: Music,
}

const platformLabels = {
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
  instagram: 'Instagram',
  youtube: 'YouTube',
  tiktok: 'TikTok',
}

export default function SocialIconBar({ socialMedia, className, iconSize = 20 }) {
  const entries = Object.entries(socialMedia || {}).filter(([, url]) => url)

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {entries.map(([platform, url]) => {
        const Icon = platformIcons[platform] || Globe
        const label = platformLabels[platform] || platform

        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <Icon size={iconSize} aria-hidden="true" />
          </a>
        )
      })}
    </div>
  )
}
