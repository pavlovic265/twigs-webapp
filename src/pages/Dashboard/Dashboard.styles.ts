import styled from "styled-components";

import LayoutComponent from "components/Layout";
import ContentComponent from "components/Content";
import Button from "components/Button";

export const Layout = styled(LayoutComponent)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const Content = styled(ContentComponent)`
  padding: 12px 8px 0;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;

  ${Button} {
    margin: 0 10px;
    width: 100px;
  }
`;
