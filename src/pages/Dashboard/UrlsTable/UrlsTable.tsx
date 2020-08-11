import React, { memo, useMemo, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUrlsForTable } from "store/urls/selectors";

import { removeUrlRequest } from "store/urls/actionCreators";
import { Url } from "store/urls/types";

import Table from "components/Table";
import EditUrlModalForm from "pages/Dashboard/UrlsTable/EditUrlModalForm";

import { actionsRender, titleRender } from "pages/Dashboard/UrlsTable/renders";

import copyToClipboard from "utils/copyToClipboard";

function UrlsTable() {
  const dispatch = useDispatch();
  // const labelsObject = useSelector(getLabelsObject);
  const urls = useSelector(getUrlsForTable);

  const [removeId, setRemoveId] = useState("");
  const [editId, setEditId] = useState("");

  const handleCopyLink = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { href } = event.currentTarget.dataset;
      if (!href) {
        return;
      }
      copyToClipboard(href);
    },
    [],
  );

  const handleOpenUrlEdit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!event) return;

      const { id } = event.currentTarget.dataset;
      if (!id) return;

      setEditId(id);
    },
    [],
  );

  const handleCloseUrlEdit = useCallback(() => {
    setEditId("");
  }, []);

  const handlePrepareRemoval = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!event) return;

      const { id } = event.currentTarget.dataset;
      if (!id) return;

      setRemoveId(id);
    },
    [],
  );

  const handleConfirmRemovalUrl = useCallback(() => {
    dispatch(removeUrlRequest(removeId));
    setRemoveId("");
  }, [removeId, dispatch]);

  const handleCancelRemovalUrl = useCallback(() => {
    setRemoveId("");
  }, []);

  const titleCallback = useCallback(titleRender, []);

  const labelCallback = () => {};
  // const labelCallback = useCallback(labelsRender.bind(null, labelsObject), [
  //   labelsObject,
  // ]);

  const actionsCallback = useCallback(
    // @ts-ignore
    actionsRender.bind(
      null,
      handlePrepareRemoval,
      handleConfirmRemovalUrl,
      handleCancelRemovalUrl,

      handleOpenUrlEdit,
      handleCopyLink,
    ),
    [
      handlePrepareRemoval,
      handleConfirmRemovalUrl,
      handleCancelRemovalUrl,
      handleOpenUrlEdit,
      handleCopyLink,
    ],
  );

  const columns = useMemo(
    () => [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        width: "30%",
        render: titleCallback,
        sorter: (a: Url, b: Url) => a.title.length - b.title.length,
      },
      {
        title: "Labels",
        key: "labels",
        dataIndex: "labels",
        render: labelCallback,
      },
      {
        title: "Actions",
        key: "actions",
        width: "20%",
        render: actionsCallback,
      },
    ],
    [titleCallback, labelCallback, actionsCallback],
  );
  return (
    <React.Fragment>
      {/* <Table
        pagination={{ position: "both" }}
        dataSource={urls}
        columns={columns}
      /> */}
      <EditUrlModalForm onClose={handleCloseUrlEdit} editId={editId} />
    </React.Fragment>
  );
}

export default memo(UrlsTable);
