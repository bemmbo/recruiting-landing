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
      'El Framework de React para la Web. Usado por algunas de las empresas más grandes del mundo, Next.js te permite crear aplicaciones web de alta calidad.',
    logo: logoNextjs,
  },
  {
    href: 'https://nodejs.org/docs',
    name: 'Node.js',
    description:
      'Node.js® es un entorno de ejecución de JavaScript de código abierto y multiplataforma.',
    logo: logoNode,
  },
  {
    href: 'https://www.typescriptlang.org/docs',
    name: 'Typescript',
    description:
      'TypeScript es un lenguaje de programación fuertemente tipado que se basa en JavaScript, brindándote mejores herramientas a cualquier escala.',
    logo: logoTypescript,
  },
  {
    href: 'https://docs.aws.amazon.com/cdk',
    name: 'AWS CDK',
    description:
      'AWS Cloud Development Kit es un kit de desarrollo de software de código abierto que permite a los desarrolladores definir infraestructura en la nube usando código y gestionarla a través de control de versiones.',
    logo: logoAwsCdk,
  },
  {
    href: 'https://graphql.org/learn',
    name: 'GraphQL',
    description:
      'GraphQL es un lenguaje de consulta para APIs y un runtime para ejecutar esas consultas con tus datos existentes.',
    logo: logoGraphql,
  },
]

export function Stack() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="stack">
        Stack Tecnológico
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
                  Leer más
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
