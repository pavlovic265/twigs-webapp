import styled from "styled-components";

import Button from "components/Button";
import { MenuItem as MenuItemComponent } from "components/Dropdown";

import {
  white,
  primary,
  primaryLight,
  primaryDark,
  secondaryDark,
} from "assets/colors";

export const HeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  background-color: ${primary};
  color: ${white};

  -webkit-box-shadow: 0px 5px 10px 5px ${primaryLight};
  -moz-box-shadow: 0px 5px 10px 5px ${primaryLight};
  box-shadow: 0px 5px 10px 5px ${primaryLight};
`;

export const Logo = styled.img`
  align-self: center;
  height: 80%;
`;

export const MenuButton = styled(Button)``;

export const MenuItem = styled(MenuItemComponent)`
  ${MenuButton} {
    color: ${primary};
  }

  &:hover {
    background-color: ${secondaryDark};
    ${MenuButton} {
      color: ${white};
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkeletonContainer = styled.div`
  background-color: ${primaryDark};
  height: 64px;
  padding: 16px 24px;
`;

export const Left = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;
