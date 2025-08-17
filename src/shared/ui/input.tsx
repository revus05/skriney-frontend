'use client'

import React, {
  ComponentProps,
  createElement,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'
import { cn } from 'shared/lib'
import { Button, Icons } from 'shared/ui'

type InputProps = ComponentProps<'input'> & {
  iconStart?: string
  iconEnd?: string
  value?: string
  onValueChange?: (newValue: string) => void
  onIconEndClick?: (e: React.MouseEvent) => void
  inputClassName?: string
  errorMessage?: string | null
}

export const Input: FC<InputProps> = ({
  iconStart,
  iconEnd,
  onIconEndClick,
  value,
  onValueChange,
  type = 'text',
  className,
  inputClassName,
  errorMessage,
  ...props
}) => {
  const [innerValue, setInnerValue] = useState<string>(value || '')

  const containerRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (onValueChange) {
      onValueChange(innerValue)
    }
  }, [innerValue, onValueChange])

  return (
    <div>
      <div
        onClick={() => containerRef.current?.focus()}
        className={cn(
          'hover:bg-bg-neutral-secondary flex w-full items-center justify-between gap-4 rounded-lg border ' +
            'focus-within:!bg-bg-brand-tertiary/70 cursor-text px-4 font-semibold transition will-change-transform active:scale-[0.98]',
          iconEnd ? 'py-1' : 'py-2',
          errorMessage && 'border-border-semantic-error-primary',
          className,
        )}
      >
        <div className={'flex grow items-center gap-4'}>
          {iconStart &&
            createElement(Icons[iconStart], {
              className: cn(
                'fill-icon-neutral-tertiary transition size-5',
                innerValue && 'fill-icon-neutral-primary',
              ),
            })}
          <input
            ref={containerRef}
            type={type}
            className={cn(
              'placeholder:text-text-neutral-tertiary grow outline-none',
              inputClassName,
            )}
            onChange={(e) => setInnerValue(e.target.value)}
            {...props}
          />
        </div>
        {iconEnd && (
          <Button variant="icon" onClick={onIconEndClick} tabIndex={-1}>
            {createElement(Icons[iconEnd], {
              className: cn(
                'fill-icon-neutral-tertiary transition size-5',
                innerValue && 'fill-icon-neutral-primary',
              ),
            })}
          </Button>
        )}
      </div>
      {errorMessage && (
        <span className={'text-text-semantic-error-primary'}>
          {errorMessage}
        </span>
      )}
    </div>
  )
}
