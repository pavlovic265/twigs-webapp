import styled from "styled-components";

import FormComponent from "components/Form";
import { secondaryDark } from "assets/colors";

export const TagText = styled.span`
  margin-right: 10px;
`;

export const Form = styled(FormComponent)`
  .ant-modal-header {
    color: ${secondaryDark};
  }
`;
