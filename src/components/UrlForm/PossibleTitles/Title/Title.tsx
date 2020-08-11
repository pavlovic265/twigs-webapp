import React, { memo } from "react";

import Button from "components/Button";
import ListItem from "components/List/ListItem";

interface TitleProps {
  title: string;
  onSelectTitle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Title({ title, onSelectTitle }: TitleProps) {
  return (
    <ListItem>
      <span>{title}</span>
      <Button data-title={title} onClick={onSelectTitle} type="primary" ghost>
        Select
      </Button>
    </ListItem>
  );
}

export default memo(Title);

// color: ${colors.geekblue[5]};
// background: ${colors.geekblue[0]};
// border-color: ${colors.geekblue[2]};
// margin: 0 10px;
// width: 100px;
// &:hover {
//   color: ${colors.geekblue[7]};
//   background: ${colors.geekblue[2]};
//   border-color: ${colors.geekblue[4]};
// }
