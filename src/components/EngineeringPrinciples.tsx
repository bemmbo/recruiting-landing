import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const engineering_principles = [
  {
    href: '/80-20-principle',
    name: 'Principio 80/20',
    description: 'Enfócate en el 20% del trabajo que entrega el 80% del valor. Lanza, itera, luego hazlo robusto.',
  },
  {
    href: '/speed-enablement',
    name: 'Sé rápido, pero permite a los demás ser rápidos también',
    description: 'A veces ser rápido no significa sacar todo rápido, si no que pensar en un enfoque de reutilización para que los demás devs puedan avanzar realmente rápido.',
  },
  {
    href: '/adaptable-growth',
    name: 'Un producto adaptable y de rápido crecimiento viene de gente que lo pensó así',
    description: 'Queremos ser un software que se pueda extender y adaptar, tanto en lógica de negocio como en UX, para distintos clientes. Para esto se necesita siempre pensar oponinionated, pero flexible.',
  },
  {
    href: '/clear-paths',
    name: 'Construimos software con caminos claros, no soluciones que delegan decisiones al usuario',
    description: 'En Buk Finanzas creemos en diseñar experiencias simples e intuitivas, con una visión clara de cómo deben funcionar y navegar. Nuestro enfoque prioriza la simplicidad y la usabilidad, evitando llenar el producto de configuraciones o menús innecesarios, incluso si eso significa decir no a ciertas solicitudes.',
  },
  {
    href: '/real-needs',
    name: 'Construimos lo que el cliente realmente necesita, no solo lo que pide',
    description: 'Nuestros clientes están acostumbrados a procesos manuales y sistemas heredados (ERP), y nuestro trabajo es mostrarles una mejor manera de hacer las cosas. Por eso, cuando recibimos sugerencias o tickets de Intercom, investigamos a fondo antes de construir cualquier solución.',
  },
  {
    href: '/small-independent-parts',
    name: 'Siempre que sea posible, dividimos los proyectos en partes pequeñas e independientes',
    description: 'El propósito cuando codeamos es resolver problemas reales de nuestros clientes. Sin embargo, estos problemas suelen ser complejos y abarcan mucho en primera instancia. Por eso, cada nuevo proyecto comienza como un conjunto de ideas y propuestas que abordan distintos aspectos del desafío.',
  },
]

export function EngineeringPrinciples() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="duties">
        Principios de Ingeniería
      </Heading>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Estos principios son los que guían cómo trabajamos en Buk Finanzas.
      </p>
      <div className="not-prose mt-4 border-t border-zinc-900/5 pt-10 dark:border-white/5">
        <ul className="space-y-8">
          {engineering_principles.map((guide, index) => (
            <li key={guide.href} className="flex">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {index + 1}
                </span>
              </div>
              <div className="ml-4">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                  {guide.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {guide.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
