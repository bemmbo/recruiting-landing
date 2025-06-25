import glob from 'fast-glob'
import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Bemmbo Recruiting',
    default: 'Bemmbo está buscando Software Engineers',
  },
  description: 'Automatizando las finanzas de las empresas.',
  metadataBase: new URL('https://looking-for-devs.bemmbo.com'),
  openGraph: {
    title: 'Bemmbo está buscando Software Engineers',
    description: 'Automatizando las finanzas de las empresas.',
    type: 'website',
    url: 'https://looking-for-devs.bemmbo.com',
    siteName: 'Bemmbo Careers',
    images: [
      {
        url: 'https://looking-for-devs.bemmbo.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bemmbo está buscando Software Engineers',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bemmbo está buscando Software Engineers',
    description: 'Automatizando las finanzas de las empresas.',
    images: ['https://looking-for-devs.bemmbo.com/og-image.png'],
    creator: '@bemmbo',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </head>
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
