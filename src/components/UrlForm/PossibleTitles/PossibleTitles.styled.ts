import styled from "styled-components";
import colors from "assets/colors";

export const Header = styled.div`
  color: ${colors.black};
`;

export const ListWrapper = styled.div`
  & ul.ant-list-items {
    height: 180px;
    overflow: scroll;
  }
`;
