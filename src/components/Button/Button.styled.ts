import styled from 'styled-components';

import { ButtonVariant } from './Button';

interface ButtonProps {
  variant: ButtonVariant;
}

export const Button = styled.button<ButtonProps>`
  border: 1px solid;
  border-radius: 2.5px;
  cursor: pointer;
  padding: 7px 14px;
  ${(props) => cssPropertiesFor(props.variant)}
`;

function cssPropertiesFor(variant: ButtonVariant) {
  const cssPropertiesFor = {
    primary: `
      background-color: #d90d42;
      border-color: #d90d42;
      color: #ffffff;
    `,
    secondary: `
      background-color: #f9f9f9;
      border-color: #f9f9f9;
      color: #333333;
    `,
  };

  return cssPropertiesFor[variant];
}
