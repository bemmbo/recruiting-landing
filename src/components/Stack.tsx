import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoNextjs from '@/images/logos/nextjs.svg'
import logoNode from '@/images/logos/node.svg'
import logoTypescript from '@/images/logos/typescript.svg'
import logoAwsCdk from '@/images/logos/aws-cdk.svg'
import logoGraphql from '@/images/logos/graphql.svg'

const libraries = [
  {
    href: 'https://nextjs.org/docs',
    name: 'Next.js',
    description:
      'The React Framework for the Web. Used by some of the world\'s largest companies, Next.js enables you to create high-quality web applications.',
    logo: logoNextjs,
  },
  {
    href: 'https://nodejs.org/docs',
    name: 'Node.js',
    description:
      'Node.js® is an open-source, cross-platform JavaScript runtime environment.',
    logo: logoNode,
  },
  {
    href: 'https://www.typescriptlang.org/docs',
    name: 'Typescript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    logo: logoTypescript,
  },
  {
    href: 'https://docs.aws.amazon.com/cdk',
    name: 'AWS CDK',
    description:
      'AWS Cloud Development Kit is an open-source software development kit that enables developers to define cloud infrastructure using code and manage it through version control.',
    logo: logoAwsCdk,
  },
  {
    href: 'https://graphql.org/learn',
    name: 'GraphQL',
    description:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
    logo: logoGraphql,
  },
]

export function Stack() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="stack">
        Stack
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3 dark:border-white/5">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className={library.name === 'Node.js' ? "h-16 w-16" : "h-12 w-12"}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
