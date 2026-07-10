import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MR. FEAST',
    short_name: 'MrFeast',
    description: 'Albanian. Macedonian. Sentinel. Eater.',
    start_url: '/widget',
    display: 'standalone',
    background_color: '#0d0d0d',
    theme_color: '#0d0d0d',
    orientation: 'any',
    icons: [
      {
        src: '/mrfeast-transparent-fix.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
