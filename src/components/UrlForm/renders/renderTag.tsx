import React from "react";

export function renderTag(props: any) {
  const { label, closable, onClose } = props;

  return React.cloneElement(label, { closable, onClose });
}
