import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outline';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;

  // TODO: Remove once the test is done
  opticalTestMultiplier?: number;
}

let styles = {
  filled: 'border bg-primary-red text-white border-primary-red',
  outline: 'border border-primary-cherry text-primary-red',
};

export const Button = ({
  variant = 'filled',
  children,
  className,
  icon,
  opticalTestMultiplier = 0,
  ...props
}: Props) => {
  return (
    <button
      className={`flex items-center justify-center font-semibold hover:opacity-80 disabled:border-ash-200 disabled:bg-ash-100 disabled:text-ash-200 ${styles[variant]} ${className}`}
      {...props}
    >
      {icon && <div className="-translate-y-[1.5px]">{icon}</div>}
      <span
        className="flex items-center"
        style={{
          lineHeight: '1em',
          transform: `translateY(${opticalTestMultiplier}px)`,
        }}
      >
        {children}
      </span>
    </button>
  );
};
