import React from "react";
import { Url } from "store/urls/types";

import Divider from "components/Divider";
import Button, { ButtonVariant } from "components/Button";
import Popconfirm from "components/Popconfirm";
import Tooltip from "components/Tooltip";
import {
  DeleteIcon,
  ExternalLinkIcon,
  CopyLinkIcon,
  EditIcon,
} from "components/Icons";

import { EditButton } from "pages/Dashboard/UrlsTable/renders/renders.styled";

const deviderStyle = { margin: "0 4px" };

export function actionsRender(
  onRemoveOpen: (event: React.MouseEvent<HTMLButtonElement>) => void,
  onRemoveConfirm: () => void,
  onRemoveCancel: () => void,

  onEditOpen: (event: React.MouseEvent<HTMLButtonElement>) => void,

  onCopyLink: (event: React.MouseEvent<HTMLButtonElement>) => void,

  url: Url,
) {
  return (
    <span>
      <Tooltip placement="bottom" title="Go to">
        <a href={url.href} target="_blank" rel="noopener noreferrer">
          <Button
            variant={ButtonVariant.none}
            size="small"
            type="link"
            icon={<ExternalLinkIcon />}
          />
        </a>
      </Tooltip>

      <Divider type="vertical" style={deviderStyle} />

      <Tooltip placement="bottom" title="Copy">
        <Button
          variant={ButtonVariant.none}
          onClick={onCopyLink}
          size="small"
          type="link"
          data-href={url.href}
          icon={<CopyLinkIcon />}
        />
      </Tooltip>

      <Divider type="vertical" style={deviderStyle} />

      <Tooltip placement="bottom" title="Edit">
        <EditButton
          variant={ButtonVariant.none}
          data-id={url.id}
          onClick={onEditOpen}
          size="small"
          type="link"
          icon={<EditIcon />}
        />
      </Tooltip>

      <Divider type="vertical" style={deviderStyle} />

      <Popconfirm
        title="Are you sure delete this url?"
        onConfirm={onRemoveConfirm}
        onCancel={onRemoveCancel}
        okText="Yes"
        cancelText="No">
        <Tooltip placement="bottom" title="Delete">
          <Button
            variant={ButtonVariant.none}
            size="small"
            type="link"
            danger
            onClick={onRemoveOpen}
            data-id={url.id}
            icon={<DeleteIcon />}
          />
        </Tooltip>
      </Popconfirm>
    </span>
  );
}
