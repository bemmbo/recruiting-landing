import { Heading } from '@/components/Heading'

const role_responsibilities = [
  {
    name: 'Product Communication',
    description: 'Collaborate closely with the product team to understand requirements and translate them into efficient technical solutions.',
  },
  {
    name: 'DDD (Dev Document Design)',
    description: 'Create and maintain detailed technical documentation, including architecture, APIs, and design decisions.',
  },
  {
    name: 'Frontend Development',
    description: 'Build modern and responsive user interfaces using technologies like React, TypeScript, and Next.js.',
  },
  {
    name: 'Backend Development',
    description: 'Develop robust APIs and secure, scalable payment processing systems.',
  },
  {
    name: 'Infrastructure as Code',
    description: 'Implement and maintain infrastructure using tools like Terraform, Docker, and cloud services.',
  },
  {
    name: 'Systems Architecture',
    description: 'Design and evolve distributed systems architecture to support business growth.',
  },
]

export function RoleResponsibilities() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="responsibilities">
        Role Responsibilities
      </Heading>
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