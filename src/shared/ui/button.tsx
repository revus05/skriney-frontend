import { ComponentProps, createElement, FC } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cva } from 'class-variance-authority'
import { cn } from 'shared/lib'
import { Icons } from 'shared/ui'

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    iconStart?: string
    iconEnd?: string
  }

const buttonVariants = cva(
  'cursor-pointer w-fit rounded-lg py-2 px-8 font-semibold text-text-brand-inverse transition active:scale-[0.98] will-change-transform flex gap-2.5 items-center',
  {
    variants: {
      variant: {
        primary:
          'bg-bg-brand-primary/70 hover:bg-bg-brand-secondary hover:text-text-brand-primary',
        icon: 'p-1 hover:bg-border-neutral-primary rounded-md',
        ghost: 'bg-none hover:bg-border-neutral-primary',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export const Button: FC<ButtonProps> = ({
  type = 'button',
  iconStart,
  iconEnd,
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {iconStart &&
        createElement(Icons[iconStart], {
          className: 'fill-icon-neutral-tertiary size-5',
        })}
      {children}
      {iconEnd &&
        createElement(Icons[iconEnd], {
          className: 'fill-icon-neutral-tertiary size-5',
        })}
    </button>
  )
}
