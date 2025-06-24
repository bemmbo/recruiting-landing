'use client'

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionValue,
} from 'framer-motion'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { BellIcon } from '@/components/icons/BellIcon'
import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { FaceSmileIcon } from '@/components/icons/FaceSmileIcon'
import { MapPinIcon } from '@/components/icons/MapPinIcon'
import { PackageIcon } from '@/components/icons/PackageIcon'
import { ShapesIcon } from '@/components/icons/ShapesIcon'
import { TagIcon } from '@/components/icons/TagIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'

interface Resource {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
}

const resources: Array<Resource> = [
  {
    href: '/stock-options',
    name: 'Opciones de acciones',
    description:
      'Ofrecemos opciones de acciones a todos nuestros empleados.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/health-insurance',
    name: 'Seguro de salud',
    description:
      'Ofrecemos seguro de salud a todos nuestros empleados.',
    icon: ChatBubbleIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/no-limit-vacations',
    name: 'Vacaciones sin límite',
    description:
      'Ofrecemos vacaciones sin límite a todos nuestros empleados.',
    icon: EnvelopeIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/remote-work',
    name: 'Trabajo remoto',
    description:
      'Ofrecemos trabajo remoto a todos nuestros empleados.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/flexible-hours',
    name: 'Horarios flexibles',
    description:
      'Ofrecemos horarios flexibles a todos nuestros empleados.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/5-weeks-post-parental-leave',
    name: '5 semanas de licencia post parental',
    description:
      'Ofrecemos 5 semanas de licencia post parental a todos nuestros empleados.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/exchange-program',
    name: 'Programa de intercambio',
    description:
      'Ofrecemos la oportunidad de viajar a otros países donde tenemos oficinas.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/gym-membership',
    name: 'Membresía de gimnasio',
    description:
      'Ofrecemos puntos a todos nuestros empleados para usar en el gimnasio de su elección.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/mental-health-support',
    name: 'Apoyo de salud mental',
    description:
      'Ofrecemos puntos a todos nuestros empleados para usar en apoyo de salud mental.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  
]

// Alternative perks list with updated information
const alternativeResources: Array<Resource> = [
  {
    href: '/stock-options',
    name: 'Opciones de acciones',
    description:
      'Equity para los primeros miembros del equipo que se lo merecen.',
    icon: TagIcon, // More appropriate for equity/ownership
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/5-weeks-vacation',
    name: '5 semanas de vacaciones',
    description:
      '2 semanas extra de vacaciones para recargar energías.',
    icon: CalendarIcon, // Perfect for vacation/time off
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/flexible-home-office',
    name: 'Home office flexible',
    description:
      'Flexibilidad para trabajar desde casa (nos encantaría compartir tiempo de oficina inicialmente).',
    icon: MapPinIcon, // Good for location/remote work
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/office-recreation',
    name: 'Recreación en oficina',
    description:
      'Mesa de ping pong, muro de escalada y canasta de básquet en la oficina.',
    icon: ShapesIcon, // Good for games/activities
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/pet-friendly',
    name: 'Oficina pet friendly',
    description:
      'Trae a tus amigos peludos a trabajar contigo.',
    icon: FaceSmileIcon, // Represents happiness/friendly environment
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/birthday-off',
    name: 'Día libre de cumpleaños',
    description:
      'Tienes tu cumpleaños como día libre para celebrar.',
    icon: BellIcon, // Good for celebrations/notifications
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/office-perks',
    name: 'Beneficios de oficina',
    description:
      'Café gratis, fruta fresca y snacks disponibles todos los días.',
    icon: PackageIcon, // Perfect for perks/benefits package
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
]

function ResourceIcon({ icon: Icon }: { icon: Resource['icon'] }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-[#75ACFF]/10 dark:group-hover:ring-[#75ACFF]/40">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-[#75ACFF]/10 dark:group-hover:stroke-[#75ACFF]" />
    </div>
  )
}

function ResourcePattern({
  mouseX,
  mouseY,
  ...gridProps
}: Resource['pattern'] & {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl mask-[linear-gradient(white,transparent)] transition duration-300 group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#75ACFF]/20 to-[#75ACFF]/10 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#75ACFF]/30 dark:to-[#75ACFF]/20"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-[#75ACFF]/30 stroke-[#75ACFF]/40 dark:fill-[#75ACFF]/20 dark:stroke-[#75ACFF]/30"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }: { resource: Resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-zinc-900/7.5 ring-inset group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm/7 font-semibold text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Perks() {
  // Switch between 'resources' (original) and 'alternativeResources' (new)
  const currentResources = alternativeResources // Change to 'resources' to use original list
  
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="perks">
        Beneficios
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {currentResources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
