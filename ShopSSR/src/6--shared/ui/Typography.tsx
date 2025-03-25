import { ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TypographyProps {
  as?: Variant;
  children: ReactNode;
  className?: string;
}

const baseStyles: Record<Variant, string> = {
  h1: 'text-3xl font-bold mb-4',
  h2: 'text-2xl font-semibold mb-4',
  h3: 'text-xl font-semibold mb-3',
  h4: 'text-lg font-semibold mb-3',
  h5: 'text-base font-semibold mb-2',
  h6: 'text-sm font-medium mb-2',
  p: 'text-sm text-gray-700 mb-2',
  span: 'text-sm text-gray-700',
};

export const Typography = ({
  as = 'p',
  children,
  className,
}: TypographyProps) => {
  const Component = as;
  return (
    <Component className={clsx(baseStyles[as], className)}>
      {children}
    </Component>
  );
};
