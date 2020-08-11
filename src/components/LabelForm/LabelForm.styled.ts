import styled from "styled-components";

import FormComponent from "components/Form";
import { secondaryDark } from "assets/colors";

export const Form = styled(FormComponent)`
  div.ant-modal-header {
    color: ${secondaryDark};
  }
`;
