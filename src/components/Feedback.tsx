'use client'

import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { forwardRef, useState, useEffect } from 'react'

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
      />
    </svg>
  )
}

function ClipboardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
      />
      <path
        fill="none"
        strokeLinejoin="round"
        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
      />
    </svg>
  )
}

function FeedbackButton(
  props: Omit<React.ComponentPropsWithoutRef<'button'>, 'type' | 'className'>,
) {
  return (
    <button
      type="submit"
      className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
      {...props}
    />
  )
}

function CopyEmailButton({ email }: { email: string }) {
  let [copyCount, setCopyCount] = useState(0)
  let copied = copyCount > 0

  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copyCount])

  return (
    <button
      type="button"
      className={clsx(
        'group/button inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition',
        copied
          ? 'bg-emerald-50/50 text-emerald-900 ring-1 ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30'
          : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700',
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(email).then(() => {
          setCopyCount((count) => count + 1)
        })
      }}
    >
      <span className="font-mono">{email}</span>
      <div className="relative flex items-center justify-center w-4 h-4">
        <span
          aria-hidden={copied}
          className={clsx(
            'absolute inset-0 flex items-center justify-center transition duration-300',
            copied && 'scale-0 opacity-0',
          )}
        >
          <ClipboardIcon className="h-4 w-4 fill-zinc-400 stroke-zinc-700 dark:fill-zinc-600 dark:stroke-zinc-300" />
        </span>
        <span
          aria-hidden={!copied}
          className={clsx(
            'absolute inset-0 flex items-center justify-center transition duration-300',
            !copied && 'scale-0 opacity-0',
          )}
        >
          <CheckIcon className="h-4 w-4 fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />
        </span>
      </div>
    </button>
  )
}

const FeedbackForm = forwardRef<
  React.ElementRef<'form'>,
  React.ComponentPropsWithoutRef<'form'>
>(function FeedbackForm({ onSubmit, className, ...props }, ref) {
  return (
    <div
      className={clsx(
        className,
        'absolute inset-0 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start md:gap-6',
      )}
    >
      <form
        {...props}
        ref={ref}
        onSubmit={onSubmit}
        className="flex items-center gap-6"
      >
      </form>
      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <span>For any feedback, contact us at</span>
        <CopyEmailButton email="cristobal@bemmbo.com" />
      </div>
    </div>
  )
})

const FeedbackThanks = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(function FeedbackThanks({ className, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'absolute inset-0 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-start md:gap-4',
      )}
    >
      <div className="flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pr-3 pl-1.5 text-sm text-emerald-900 ring-1 ring-emerald-500/20 ring-inset dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30">
        <CheckIcon className="h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />
        Thanks for your feedback!
      </div>
      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <span>For any feedback, contact us at</span>
        <CopyEmailButton email="cristobal@bemmbo.com" />
      </div>
    </div>
  )
})

export function Feedback() {
  let [submitted, setSubmitted] = useState(false)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // event.nativeEvent.submitter.dataset.response
    // => "yes" or "no"

    setSubmitted(true)
  }

  return (
    <div className="relative h-16 md:h-8">
      <Transition show={!submitted}>
        <FeedbackForm
          className="duration-300 data-closed:opacity-0 data-leave:pointer-events-none"
          onSubmit={onSubmit}
        />
      </Transition>
      <Transition show={submitted}>
        <FeedbackThanks className="delay-150 duration-300 data-closed:opacity-0" />
      </Transition>
    </div>
  )
}
