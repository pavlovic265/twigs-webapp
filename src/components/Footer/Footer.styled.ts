import styled from "styled-components";
import { Layout } from "antd";
import { primaryLight, white } from "assets/colors";

export const Footer = styled(Layout.Footer)`
  text-align: center;
  background-color: ${primaryLight};
  color: ${white};
`;
