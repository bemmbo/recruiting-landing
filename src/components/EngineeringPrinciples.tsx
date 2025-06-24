import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const engineering_principles = [
  {
    href: '/80-20-principle',
    name: '80/20 Principle',
    description: 'Focus on the 20% of work that delivers 80% of the value. Ship, iterate, then make it robust.',
  },
  {
    href: '/speed-enablement',
    name: 'Speed Enablement',
    description: 'Being fast means thinking in reusability so other developers can move quickly too.',
  },
  {
    href: '/adaptable-growth',
    name: 'Adaptable Growth',
    description: 'Build opinionated but flexible software that can extend for different clients and use cases.',
  },
  {
    href: '/clear-paths',
    name: 'Clear Paths',
    description: 'Design simple, intuitive experiences with clear navigation, avoiding unnecessary configurations.',
  },
  {
    href: '/real-needs',
    name: 'Real Needs',
    description: 'Build what clients actually need, not just what they ask for. Research before building.',
  },
  {
    href: '/small-independent-parts',
    name: 'Small Independent Parts',
    description: 'Break complex projects into small, independent components that solve real problems.',
  },
]

export function EngineeringPrinciples() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="duties">
        Engineering Principles
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {engineering_principles.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
