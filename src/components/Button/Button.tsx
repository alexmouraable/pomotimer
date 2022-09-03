import Icon from '@mdi/react';
import { ButtonHTMLAttributes } from 'react';

import * as B from './Button.styled';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: ButtonVariant;
  icon?: string;
}

export function Button({
  label,
  variant = 'primary',
  icon,
  ...props
}: ButtonProps) {
  function buttonContent() {
    if (label) {
      return label;
    }

    if (icon) {
      return <Icon path={icon} size="1rem" />;
    }

    throw new Error(
      'To generate the button content is need passing a label or icon.'
    );
  }

  return (
    <B.Button variant={variant} {...props}>
      {buttonContent()}
    </B.Button>
  );
}
