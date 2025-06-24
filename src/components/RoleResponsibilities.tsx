import { Heading } from '@/components/Heading'

const role_responsibilities = [
  {
    name: 'Comunicación de Producto',
    description: 'Colaborar estrechamente con el equipo de producto para entender requerimientos y traducirlos en soluciones técnicas eficientes.',
  },
  {
    name: 'DDD (Dev Document Design)',
    description: 'Crear y mantener documentación técnica detallada, incluyendo arquitectura, APIs y decisiones de diseño.',
  },
  {
    name: 'Desarrollo Frontend',
    description: 'Construir interfaces de usuario modernas y responsivas usando tecnologías como React, TypeScript y Next.js.',
  },
  {
    name: 'Desarrollo Backend',
    description: 'Desarrollar APIs robustas y sistemas de procesamiento de pagos seguros y escalables.',
  },
  {
    name: 'Infraestructura como Código',
    description: 'Implementar y mantener infraestructura usando herramientas como AWS CDK, Docker y servicios en la nube.',
  },
  {
    name: 'Arquitectura de Sistemas',
    description: 'Diseñar y evolucionar la arquitectura de sistemas distribuidos para apoyar el crecimiento del negocio.',
  },
]

export function RoleResponsibilities() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="responsibilities">
        Responsabilidades del Rol
      </Heading>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        No es necesario que tengas experiencia en todas las tecnologías que se mencionan, pero sí que tengas una pasión por aprender y crecer. Nuestro equipo te va a acompañar en el camino.
      </p>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-3 dark:border-white/5">
        {role_responsibilities.map((responsibility) => (
          <div key={responsibility.name}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {responsibility.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {responsibility.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 