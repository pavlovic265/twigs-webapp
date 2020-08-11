import styled, { css } from "styled-components";
import { Button as AntButton } from "antd";

import {
  white,
  black,
  primary,
  primaryLight,
  primaryDark,
  secondary,
  secondaryLight,
  secondaryDark,
} from "assets/colors";

export enum ButtonVariant {
  primary = "PRIMARY",
  secondary = "SECONDARY",
  none = "NONE",
}

const priamryColors = css`
  color: ${white};
  background: ${primary};
  border-color: ${primaryLight};

  &:hover {
    color: ${white};
    background: ${primaryLight};
    border-color: ${primaryDark};
  }

  &:focus {
    color: ${white};
    background: ${primary};
    border-color: ${primaryLight};
  }
`;

const secondaryColors = css`
  color: ${black};
  background: ${secondaryDark};
  border-color: ${secondary};

  &:hover {
    color: ${black};
    background: ${secondary};
    border-color: ${secondaryLight};
  }

  &:focus {
    color: ${black};
    background: ${secondary};
    border-color: ${secondaryLight};
  }
`;

interface ButtonStyle {
  variant?: ButtonVariant;
}

export const Button = styled(AntButton)<ButtonStyle>`
  ${({ variant = ButtonVariant.primary }) => {
    switch (variant) {
      case ButtonVariant.none:
        return null;
      case ButtonVariant.secondary:
        return secondaryColors;
      default:
        return priamryColors;
    }
  }}
`;
