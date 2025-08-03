import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

// Button variants using class-variance-authority for better type safety and flexibility
const buttonVariants = cva(
  // Base styles that always apply
  "inline-flex flex-col justify-center items-center rounded-sm font-normal font-['Satoshi_Variable'] leading-normal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: 'bg-red-800 text-white hover:bg-red-900 focus:ring-red-500',
        secondary:
          'outline outline-1 outline-offset-[-1px] outline-red text-white hover:bg-gray-900 hover:bg-opacity-10 focus:ring-red-500',
      },
      size: {
        small: 'h-8 min-w-20 p-1.5 text-sm',
        medium: 'h-9 min-w-24 p-2 text-sm',
        large: 'h-11 min-w-28 p-2 text-base',
        xlarge: 'h-12 min-w-32 p-3 text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
      fullWidth: false,
    },
  }
)

// Extended interface for button props
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode
    text?: string
    icon?: ReactNode
    iconPosition?: 'left' | 'right'
    loading?: boolean
    loadingText?: string
    asChild?: boolean
    href?: string
    target?: string
    rel?: string
    // Data attributes for analytics/testing
    dataLayer?: string
    dataIcon?: string
    dataSize?: string
    dataState?: string
  }

// Utility function to combine classes (you can use clsx or similar)
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Loading spinner component
const LoadingSpinner = ({
  size = 'small',
}: {
  size?: 'small' | 'medium' | 'large'
}) => {
  const spinnerSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  }

  return (
    <svg
      className={cn('animate-spin', spinnerSizes[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

// Main Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      children,
      text,
      icon,
      iconPosition = 'left',
      loading = false,
      loadingText = 'Loading...',
      disabled,
      asChild = false,
      href,
      target,
      rel,
      dataLayer = 'Button-Primary',
      dataIcon = 'None',
      dataSize = 'Large',
      dataState = 'Default',
      onClick,
      ...props
    },
    ref
  ) => {
    // Determine if button should be disabled
    const isDisabled = disabled || loading

    // Get button content
    const buttonContent = children || text || 'Button'

    // Handle loading state
    const displayText = loading ? loadingText : buttonContent

    // Create the button classes
    const buttonClasses = cn(
      buttonVariants({ variant, size, fullWidth, className })
    )

    // Content with icon and loading handling
    const renderContent = () => {
      return (
        <div className="flex items-center justify-center gap-2">
          {/* Left icon or loading spinner */}
          {icon && iconPosition === 'left' && !loading && (
            <span className="flex-shrink-0">{icon}</span>
          )}

          {/* Loading spinner */}
          {loading && (
            <LoadingSpinner
              size={
                size === 'small'
                  ? 'small'
                  : size === 'large' || size === 'xlarge'
                    ? 'large'
                    : 'medium'
              }
            />
          )}

          {/* Button text/content */}
          <div data-layer="Label" className="Label text-center justify-start">
            {displayText}
          </div>

          {/* Right icon */}
          {icon && iconPosition === 'right' && !loading && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </div>
      )
    }

    // If used as a link
    if (href && !asChild) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={buttonClasses}
          data-layer={dataLayer}
          data-icon={dataIcon}
          data-size={dataSize}
          data-state={isDisabled ? 'Disabled' : dataState}
          {...(props as any)}
        >
          {renderContent()}
        </a>
      )
    }

    // Regular button
    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={isDisabled}
        onClick={onClick}
        data-layer={dataLayer}
        data-icon={dataIcon}
        data-size={dataSize}
        data-state={isDisabled ? 'Disabled' : dataState}
        {...props}
      >
        {renderContent()}
      </button>
    )
  }
)

export { Button, buttonVariants }
export type { ButtonProps }
