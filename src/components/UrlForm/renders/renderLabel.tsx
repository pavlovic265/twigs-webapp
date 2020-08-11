import React from "react";
// import { Label } from "store/labels/types";

import Option from "components/Select/Option";
import Tag from "components/Tag";
import { TagText } from "components/UrlForm/UrlForm.styled";

export function renderLabel(label: any) {
  return (
    <Option key={label.id} data-value={label.value} value={label.id}>
      <Tag color={label.color}>
        <TagText>{label.value}</TagText>
      </Tag>
    </Option>
  );
}
