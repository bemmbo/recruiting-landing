import clsx from 'clsx'
import Link from 'next/link'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  )
}

const variantStyles = {
  primary:
    'rounded-full bg-[#304cac] py-1 px-3 text-white hover:bg-[#1A2B5C] dark:bg-[#304cac] dark:text-white dark:ring-1 dark:ring-inset dark:ring-[#304cac]/20 dark:hover:bg-[#357ABD] dark:hover:text-white dark:hover:ring-[#304cac]',
  secondary:
    'rounded-full bg-[#304cac]/5 py-1 px-3 text-[#304cac] hover:bg-[#304cac]/10 dark:bg-[#304cac]/10 dark:text-[#304cac] dark:ring-1 dark:ring-inset dark:ring-[#304cac]/20 dark:hover:bg-[#304cac]/20 dark:hover:text-[#304cac]',
  filled:
    'rounded-full bg-[#304cac] py-1 px-3 text-white hover:bg-[#1A2B5C] dark:bg-[#304cac] dark:text-white dark:hover:bg-[#357ABD]',
  outline:
    'rounded-full py-1 px-3 text-[#304cac] ring-1 ring-inset ring-[#304cac]/10 hover:bg-[#304cac]/5 hover:text-[#304cac] dark:text-[#304cac] dark:ring-[#304cac]/20 dark:hover:bg-[#304cac]/10 dark:hover:text-[#304cac]',
  text: 'text-[#304cac] hover:text-[#1A2B5C] dark:text-[#304cac] dark:hover:text-[#357ABD]',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
  arrow?: 'left' | 'right'
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  children,
  arrow,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[variant],
    className,
  )

  let arrowIcon = (
    <ArrowIcon
      className={clsx(
        'mt-0.5 h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1',
      )}
    />
  )

  let inner = (
    <>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </>
  )

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
