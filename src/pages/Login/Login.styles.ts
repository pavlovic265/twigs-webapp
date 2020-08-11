import styled from "styled-components";

import colors from "assets/colors";

import { GithubIcon } from "components/Icons";
import LayoutComponent from "components/Layout";
import ContentComponent from "components/Content";
import ButtonComponent from "components/Button";

export const Layout = styled(LayoutComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled(ContentComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled(ButtonComponent)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.white};
  background: ${colors.grey[5]};
  border-color: ${colors.white};

  &:hover {
    color: ${colors.white};
    background: ${colors.grey[4]};
    border-color: ${colors.grey[5]};
  }
`;

export const LoginGithubIcon = styled(GithubIcon)`
  /* font-size: 25px; */
`;

export const Link = styled.a`
  color: white;
  margin-left: 10px;

  &:hover {
    color: whitesmoke;
  }
`;
